"use client";

import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "@/components/ui/marque/marque.module.css";
import Image from "next/image";

export default function Marque() {
  const technologies = [
    { name: "React", logo: "/icons/reactjs.svg" },
    { name: "Next", logo: "/icons/nextjs.svg" },
    { name: "Astro", logo: "/icons/astro.svg" },
    { name: "Css", logo: "/icons/css3.svg" },
    { name: "figma", logo: "/icons/figma.svg" },
    { name: "github", logo: "/icons/github.svg" },
    { name: "html", logo: "/icons/html5.svg" },
    { name: "javascript", logo: "/icons/js.svg" },
    { name: "tailwind", logo: "/icons/tailwindcss.svg" },
    { name: "sass", logo: "/icons/sass.svg" },
    { name: "shadcn", logo: "/icons/shadcnui.svg" },
  ];

  const marqueeInnerRef = useRef<HTMLDivElement>(null); // Ref to the inner div holding all items
  const [totalWidth, setTotalWidth] = useState(0); // State to store the full width
  const translateX = useMotionValue(0);

  useEffect(() => {
    if (marqueeInnerRef.current) {
      const totalWidth = marqueeInnerRef.current.scrollWidth; // Full scrollable width
      setTotalWidth(totalWidth); // Set the full width
    }
  }, []);

  useEffect(() => {
    if (totalWidth === 0) return;

    const finalPosition = -totalWidth / 2 - 32 - 2; // Move to negative of the full width

    const controls = animate(translateX, [0, finalPosition], {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [translateX, totalWidth]);

  return (
    <div className={styles.marque}>
      <motion.div
        ref={marqueeInnerRef} // Reference to the whole content
        className={styles.marqueInner}
        style={{ x: translateX }}
      >
        {/* Duplicate the items for smooth scrolling */}
        {[...technologies, ...technologies].map((item, index) => (
          <div key={index} className={styles.marqueItem}>
            <Image src={item.logo} alt={item.name} width={64} height={64} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
