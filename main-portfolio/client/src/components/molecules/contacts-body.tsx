import { useContactsData } from "@/providers/contact-provider";
import { ContactForm } from "./contact-form";

export default function ContactsBody() {
  const { via } = useContactsData();
  const actionLink =
    via === "Email"
      ? "mailto:muhamadaqil383@gmail.com"
      : "https://wa.me/6285693273746";

  return <ContactForm via={via} actionLink={actionLink} />;
}
