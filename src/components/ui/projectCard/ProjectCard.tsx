"use client";

import Image from "next/image";
import Button from "@/components/ui/button/Button";
import Divider from "@/components/ui/divider/Divider";
import styles from "./projectCard.module.css";
import { ArrowRight } from "lucide-react";

interface cardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  url: string;
}

const ProjectCard: React.FC<cardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  url,
}) => {
  return (
    <article className={styles.projectCard}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.projectImage}
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
        />
      </div>
      <div className={styles.projectDescription}>
        <header>
          <h3>{title}</h3>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Divider />
        </header>

        <p>{description}</p>

        <Button
          message="View Website"
          icon={<ArrowRight />}
          newTab={true}
          href={url}
        />
      </div>
    </article>
  );
};

export default ProjectCard;
