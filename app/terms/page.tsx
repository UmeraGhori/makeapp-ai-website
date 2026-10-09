import { FileText } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Terms of Use — mesi.ai",
  description: "Mesi.ai Terms of Use: eligibility, plans, subscriptions, acceptable use and liability.",
};

export default function TermsPage() {
  return <LegalPage file="terms.md" label="User Agreement" Icon={FileText} />;
}
