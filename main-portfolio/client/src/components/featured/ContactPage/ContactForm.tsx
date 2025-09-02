import Button from "@/components/atoms/Button/BuiltInButton";
import { useTranslations } from "next-intl";
import React from "react";

interface ContactFormProps {
  via: "Email" | "Whatsapp";
  actionLink: string;
}

export function ContactForm({ via, actionLink }: ContactFormProps) {
  const t = useTranslations();
  const isViaEmail = via === "Email";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const message = form["body-message"].value;
    const encodedMessage = encodeURIComponent(message);

    if (isViaEmail) {
      window.location.href = `${actionLink}?subject=Portofolio%20-%20Penawaran%20Kerja%20Sama&body=${encodedMessage}`;
    } else {
      window.location.href = `${actionLink}?text=${encodedMessage}`;
    }
  };

  return (
    <form method="get" onSubmit={handleSubmit}>
      {isViaEmail && (
        <input
          type="hidden"
          name="subject"
          value="Portofolio - Penawaran Kerja Sama"
        />
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="body-message">
          {via === "Email"
            ? t("Contact.messageEmail")
            : t("Contact.messageWhatsApp")}
        </label>
        <textarea
          name={isViaEmail ? "body" : "text"}
          id="body-message"
          placeholder={t("Contact.bodyPlaceholder")}
          className="p-2 rounded-md font-poppins text-black h-[250px]"
        ></textarea>
      </div>
      <div className="my-4">
        <Button styleTemplate="yuhomyan" styleNumber={2}>
          {via === "Email" ? t("Contact.sendViaEmail") : t("Contact.sendViaWhatsApp") }
        </Button>
      </div>
    </form>
  );
}
