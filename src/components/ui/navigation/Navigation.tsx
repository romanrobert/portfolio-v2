"use client";

import Link from "next/link";
import styles from "@/components/ui/navigation/navigation.module.css";
import { useEffect, useState, useMemo } from "react";

export default function Navigation() {
  const navItems = useMemo(
    () => [
      { name: "Free Consultation", href: "#home" },
      { name: "Projects", href: "#projects" },
      { name: "About", href: "#about" },
      { name: "Get in Touch", href: "#" },
    ],
    []
  );

  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.7,
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
  return (
    <nav>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              className={`${styles.navItem} ${
                activeSection === item.href.slice(1) ? styles.active : ""
              }`}
              href={item.href}
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
