import Image from "next/image";
import styles from "./page.module.css";
import Profile from "@/components/profile/Profile";
import ListBio from "@/components/list-bio/ListBio";
import Features from "@/components/features/Features";
import Order from "@/components/order/Order";

export default function Home() {
  return (
    <>
      <Profile />
      <ListBio />
      <Features/>
      <Order/>
    </>
  );
}
