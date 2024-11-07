"use client";

import Link from "next/link";
import styles from "@/components/ui/navigation/navigation.module.css";
import { useEffect, useState, useMemo } from "react";

interface NavigationProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({ setOpen }: NavigationProps) {
  const navItems = useMemo(
    () => [
      { name: "Free Consultation", href: "#home" },
      { name: "Projects", href: "#projects" },
      { name: "About", href: "#about" },
      { name: "Get in Touch", href: "#contact" },
    ],
    []
  );

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [windowWidth, setWindoWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection((entry.target as HTMLElement).id);
        }
      });
    }, options);

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.slice(1));
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navItems]);

  const handleLinkClick = () => {
    if (windowWidth < 768) {
      setOpen(false);
    }
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              className={`${styles.navItem} ${
                activeSection === item.href.slice(1) ? styles.active : ""
              }`}
              href={item.href}
              onClick={handleLinkClick}
            >
              <span
                className={styles.navDot}
                style={{
                  opacity: activeSection === item.href.slice(1) ? 1 : 0,
                }}
              ></span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
