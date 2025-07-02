import ProfileTemplate from "@/components/templates/profile/ProfileTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Muhamad Aqil Maulana",
};

export default function ProfilePage() {
  return <ProfileTemplate />;
}
