import { useContactsData } from "@/providers/contact-provider";
import { ContactOptionButton } from "../atoms/button-option-contact";
import { useTranslations } from "next-intl";

export default function ContactsHeader() {
  const { setVia, via } = useContactsData();
  const t = useTranslations()

  return (
    <div className="flex justify-center gap-4 mb-4">
      <ContactOptionButton
        label={t("Contact.viaEmail")}
        isActive={via === "Email"}
        onClick={() => setVia("Email")}
      />
      <ContactOptionButton
        label={t("Contact.viaWhatsApp")}
        isActive={via === "Whatsapp"}
        onClick={() => setVia("Whatsapp")}
      />
    </div>
  );
}
