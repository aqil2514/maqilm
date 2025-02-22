"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import MainContainer from "../organisms/container-main";
import ContactsProvider from "@/providers/contact-provider";
import { fadeInVariant } from "@/utils/animation/motion-variants";

// Dynamic import untuk lazy loading
const ContactsBody = dynamic(() => import("../molecules/contacts-body"), { ssr: false });
const ContactsHeader = dynamic(() => import("../molecules/contacts-header"), { ssr: false });

export default function ContactTemplate() {
  const t = useTranslations();

  return (
    <MainContainer>
      <ContactsProvider>
        <motion.h1
          variants={fadeInVariant}
          initial="initial"
          animate="animate"
          className="text-center text-2xl my-4 font-bold font-young-serif text-sky-400"
        >
          {t("Contact.ourContact")}
        </motion.h1>
        <motion.div
          variants={fadeInVariant}
          initial="initial"
          animate="animate"
          className="max-w-lg mx-auto p-6 bg-slate-700 rounded-lg shadow-md border border-sky-500"
        >
          <ContactsHeader />
          <ContactsBody />
        </motion.div>
      </ContactsProvider>
    </MainContainer>
  );
}
