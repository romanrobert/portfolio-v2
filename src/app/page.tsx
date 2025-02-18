"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/ui/button/Button";
import Divider from "@/components/ui/divider/Divider";
import { projectData } from "./projectData";
import ProjectCard from "@/components/ui/projectCard/ProjectCard";
import Marque from "@/components/ui/marque/Marque";
import { SquareArrowOutUpRight, ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.page}>
      <section id="home">
        <div className={styles.hero}>
          <h1>I Create Websites You&apos;ll Love Using</h1>
          <p>
            If you need a website for your small business or want a frontend
            developer on your team, I can help! I build clean, maintainable code
            and create smooth, user-friendly interfaces.
          </p>
        </div>
        <div className={styles.cta}>
          <p>
            Book a <strong>Free-15 Minute Consultation Today</strong>
          </p>
          <Button
            message="Book Free Consultation"
            href="https://cal.com/romanrobert/15min"
            icon={<SquareArrowOutUpRight />}
            newTab={true}
          />
        </div>
        <Divider />
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul className={styles.projectList}>
          {projectData.map((project) => (
            <li className={styles.stickyArticle} key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
                url={project.url}
              />
            </li>
          ))}
        </ul>
        <Divider />
      </section>
      <section id="about">
        <header>
          <h2>About</h2>
          <p>
            <strong>Technologies & frameworks</strong> I use to build your
            website.
          </p>
        </header>
        <div className={styles.marqueWrapper}>
          <Marque />
        </div>

        <div className={styles.aboutContent}>
          <h3>Few words about what I can do for your business.</h3>
          <p>
            I&apos;m a front-end developer from Cluj-Napoca who creates
            performant, responsive websites. I build smooth user experiences
            using JavaScript, modern CSS, and frameworks like Astro or React. I
            also have experience with design tools and content management
            systems to support your project needs. Whether you're looking for a
            business website or a developer for your team, I'll help bring your
            vision to life.
          </p>
          <Button
            message="Get Resume"
            href="/resume"
            icon={<ArrowDown />}
            newTab={true}
          />
        </div>
        <Divider />
      </section>
      <section id="contact" className={styles.contact}>
        <h3>Schedule free 15 min consultation</h3>
        <p>
          Ready to discuss your project? Book a free 15-minute consultation and
          let's explore how we can work together.
        </p>
        <div className={styles.ctaButtons}>
          <Button
            message="Book Free Consultation"
            href="https://cal.com/romanrobert/15min"
            icon={<SquareArrowOutUpRight />}
            newTab={true}
          />
          <span>or</span>

          <Link className={styles.email} href="mailto:hello@romanrobert.com">
            Email Me Instead
          </Link>
        </div>

        <Image
          className={styles.mountain}
          src="/images/Mountain.svg"
          alt=""
          width={1380}
          height={180}
        ></Image>
      </section>
    </main>
  );
}
