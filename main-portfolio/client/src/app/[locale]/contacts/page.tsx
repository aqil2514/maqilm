import ContactTemplate from "@/components/templates/ContactTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contacts | Muhamad Aqil Maulana",
  };

export default function ContactsPage(){
    return <ContactTemplate />
}