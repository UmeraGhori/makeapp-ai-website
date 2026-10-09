import { UserCog } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Delete Your Account — mesi.ai",
  description:
    "How to delete your Mesi.ai account and data, what is deleted, what may remain, and what to do if you cannot sign in.",
};

export default function DeleteAccountPage() {
  return <LegalPage file="delete-account.md" label="Account & Privacy" Icon={UserCog} />;
}
