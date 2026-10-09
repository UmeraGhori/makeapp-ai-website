import { Shield } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Privacy Policy — mesi.ai",
  description:
    "Mesi.ai Privacy Policy: what data we collect, how it is processed, retained and deleted, and your rights.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage file="privacy-policy.md" label="Legal Documentation" Icon={Shield} />;
}
