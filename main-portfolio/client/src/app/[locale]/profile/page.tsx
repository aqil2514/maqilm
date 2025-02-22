import ProfileTemplate from "@/components/templates/profile-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Muhamad Aqil Maulana",
};

export default function ProfilePage() {
  return <ProfileTemplate />;
}
