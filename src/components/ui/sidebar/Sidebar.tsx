"use client";

import logo from "/public/logo/logo-r.svg";
import Image from "next/image";
import styles from "@/components/ui/sidebar/sidebar.module.css";
import Navigation from "@/components/ui/navigation/Navigation";
import Avatar from "../avatar/Avatar";
import SocialMediaList from "../socialMediaList/SocialMediaList";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(true);
        setShouldAnimate(false);
      } else if (window.innerWidth <= 768) {
        setOpen(false);
        setShouldAnimate(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <aside className={styles.sidebar}>
      <header>
        <Image src={logo} alt="Logo for Roman Robert" width={64} height={64} />
        <div className={styles.menu} onClick={() => setOpen(!open)}>
          {open ? <X size={32} /> : <Menu size={32} />}
        </div>
      </header>

      {open && (
        <motion.div
          variants={menuSlide}
          animate={shouldAnimate ? "enter" : false}
          exit="exit"
          initial={shouldAnimate ? "initial" : false}
          className={styles.navigationContent}
        >
          <Navigation setOpen={setOpen} />
          <footer>
            <Avatar />
            <SocialMediaList />
          </footer>
        </motion.div>
      )}
    </aside>
  );
}
