"use client"
import React, { createContext, SetStateAction, useContext, useState } from "react";

type MessageVia = "Whatsapp" | "Email";

interface ContactsContextProps {
  via: MessageVia;
  setVia: React.Dispatch<SetStateAction<MessageVia>>;
}

const ContactsContext = createContext<ContactsContextProps>(
  {} as ContactsContextProps
);

export default function ContactsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [via, setVia] = useState<MessageVia>("Email");

  const value: ContactsContextProps = {
    via,
    setVia,
  };
  
  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
}

export function useContactsData(){
    return useContext(ContactsContext);
}