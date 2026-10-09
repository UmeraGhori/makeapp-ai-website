import fs from "node:fs";
import path from "node:path";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type Item = { text: string; extra: string[] };
type Block =
  | { t: "p"; text: string }
  | { t: "ul" | "ol"; items: Item[] };
type Section = { title: string | null; id: string; blocks: Block[] };

const LIST_RE = /^(-|\d+\.)\s+(.*)$/;
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function parse(md: string) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  let title = "";
  const sections: Section[] = [{ title: null, id: "intro", blocks: [] }];
  let cur = sections[0];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      title = line.slice(2).trim();
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      const t = line.slice(3).trim();
      cur = { title: t, id: slug(t), blocks: [] };
      sections.push(cur);
      i++;
      continue;
    }

    const first = line.match(LIST_RE);
    if (first) {
      const ordered = first[1] !== "-";
      const items: Item[] = [];
      while (i < lines.length) {
        const m = lines[i].match(LIST_RE);
        if (!m || (m[1] !== "-") !== ordered) break;
        const item: Item = { text: m[2], extra: [] };
        i++;
        let para: string[] = [];
        while (i < lines.length) {
          const l = lines[i];
          if (!l.trim()) {
            let j = i;
            while (j < lines.length && !lines[j].trim()) j++;
            if (j < lines.length && /^\s{2,}\S/.test(lines[j])) {
              if (para.length) item.extra.push(para.join("\n")), (para = []);
              i = j;
              continue;
            }
            break;
          }
          if (/^\s{2,}\S/.test(l)) {
            para.push(l.trim());
            i++;
            continue;
          }
          break;
        }
        if (para.length) item.extra.push(para.join("\n"));
        items.push(item);

        let j = i;
        while (j < lines.length && !lines[j].trim()) j++;
        const next = lines[j]?.match(LIST_RE);
        if (next && (next[1] !== "-") === ordered) i = j;
        else break;
      }
      cur.blocks.push({ t: ordered ? "ol" : "ul", items });
      continue;
    }

    const para = [line.trim()];
    i++;
    while (i < lines.length && lines[i].trim() && !/^(#|-\s|\d+\.\s)/.test(lines[i])) {
      para.push(lines[i].trim());
      i++;
    }
    cur.blocks.push({ t: "p", text: para.join("\n") });
  }

  return { title, sections };
}

const INLINE_RE =
  /\*\*(.+?)\*\*|\*(.+?)\*|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)|(Account Deletion page)/g;
const linkClass = "text-blush-600 underline font-semibold";

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let n = 0;
  for (const m of Array.from(text.matchAll(INLINE_RE))) {
    if (m.index! > last) out.push(text.slice(last, m.index));
    const k = n++;
    if (m[1] !== undefined) out.push(<strong key={k} className="font-semibold text-plum-900">{inline(m[1])}</strong>);
    else if (m[2] !== undefined) out.push(<em key={k}>{inline(m[2])}</em>);
    else if (m[3] !== undefined)
      out.push(<a key={k} href={`mailto:${m[3]}`} className={linkClass}>{m[3]}</a>);
    else out.push(<Link key={k} href="/account/delete" className={linkClass}>{m[4]}</Link>);
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function lines(text: string): ReactNode[] {
  return text.split("\n").flatMap((l, i) => (i ? [<br key={`br${i}`} />, ...inline(l)] : inline(l)));
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        if (b.t === "p") return <p key={i}>{lines(b.text)}</p>;
        const List = b.t === "ol" ? "ol" : "ul";
        return (
          <List
            key={i}
            className={`${b.t === "ol" ? "list-decimal" : "list-disc"} pl-5 space-y-2`}
          >
            {b.items.map((it, j) => (
              <li key={j}>
                {lines(it.text)}
                {it.extra.map((e, k) => (
                  <p key={k} className="mt-3">{lines(e)}</p>
                ))}
              </li>
            ))}
          </List>
        );
      })}
    </div>
  );
}

export function LegalPage({
  file,
  label,
  Icon,
}: {
  file: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
}) {
  const md = fs.readFileSync(path.join(process.cwd(), "content", file), "utf8");
  const { title, sections } = parse(md);
  const intro = sections[0].blocks;
  const body = sections.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-ivory-100 text-plum-900">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blush-600 hover:text-blush-700 transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2.5 mb-3">
            <span className="p-2 rounded-xl bg-blush-100 text-blush-600">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-plum-500">
              {label}
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          <div className="text-sm sm:text-base text-plum-700 leading-relaxed mb-10">
            <Blocks blocks={intro} />
          </div>

          {body.length >= 8 && (
            <nav
              aria-label="Table of contents"
              className="p-6 rounded-3xl bg-blush-50 border border-blush-200/70 mb-10"
            >
              <p className="font-display font-bold text-plum-900 mb-3">Contents</p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-plum-700">
                {body.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="hover:text-blush-600 font-medium">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="space-y-8 text-plum-800 text-sm sm:text-base leading-relaxed">
            {body.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-blush-200/70 shadow-2xs scroll-mt-28"
              >
                <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-900 mb-4">
                  {s.title}
                </h2>
                <Blocks blocks={s.blocks} />
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
