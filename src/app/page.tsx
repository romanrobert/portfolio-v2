import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/ui/button/Button";
import { ArrowRight } from "lucide-react";
import Divider from "@/components/ui/divider/Divider";
import { projectData } from "./projectData";
import ProjectCard from "@/components/ui/projectCard/ProjectCard";
import Marque from "@/components/ui/marque/Marque";

export default function Home() {
  return (
    <main className={styles.page}>
      <section id="home">
        <div className={styles.hero}>
          <h1>From Concept to Code: Bringing Websites to Life</h1>
          <p>
            Create your online presence with <strong>custom</strong> Webflow
            websites and animations, designed to match your vision with 1:1
            precision and design expertise.
          </p>
        </div>
        <div className={styles.cta}>
          <p>
            Book a <strong>Free-15 Minute Consultation Today</strong>
          </p>
          <Button
            message="Book Free Consultation"
            href="https://cal.com/romanrobert/15min"
            icon={null}
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
            I'm a front-end developer based in Cluj-Napoca, Romania. I really
            enjoy creating websites and ensuring they look great on any device.
            I work with CSS, Sass, JavaScript, and Astro, and I'm also familiar
            with UX principles and design tools like Figma. Besides frontend
            technologies I am also familiar with CMS tools such as Webflow.
          </p>
          <Button
            message="Get Resume"
            href="/resume"
            icon={null}
            newTab={true}
          />
        </div>
        <Divider />
      </section>
      <section id="contact" className={styles.contact}>
        <h3>Schedule free 15 min consultation</h3>
        <p>
          Don’t wait more! Build your website now.Select an available hour and
          date for our meeting.
        </p>
        <Button
          message="Book Free Consultation"
          href="https://cal.com/romanrobert/15min"
          icon={null}
          newTab={true}
        />
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
