import styles from "@/components/ui/avatar/avatar.module.css";
import avatarImage from "/public/images/rr-picture.png";
import Link from "next/link";
import Image from "next/image";

export default function Avatar() {
  return (
    <div className={styles.avatar}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.avatarImage}
          src={avatarImage}
          alt="Avatar for Roman Robert"
          width={64}
          height={64}
        />
      </div>
      <div>
        <p>Roman Robert</p>
        <Link className={styles.email} href="mailto:hello@romanrobert.com">
          hello@romanrobert.com
        </Link>
      </div>
    </div>
  );
}
