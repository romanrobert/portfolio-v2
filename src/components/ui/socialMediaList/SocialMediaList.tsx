import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import styles from "@/components/ui/socialMediaList/socialMediaList.module.css";

export default function SocialMediaList() {
  const socialMediaLinks = [
    { id: 1, icon: <Github />, link: "https://github.com/romanrobert" },
    {
      id: 2,
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/roman-robert-dev",
    },
    {
      id: 3,
      icon: <Instagram />,
      link: "https://www.instagram.com/romanrobert.dev",
    },
  ];
  return (
    <ul className={styles.socialsList}>
      {socialMediaLinks.map((link) => (
        <li key={link.id}>
          <Link href={link.link} target="_blank">
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
