import logo from "/public/logo/logo-r.svg";
import Image from "next/image";
import styles from "@/components/ui/sidebar/sidebar.module.css";
import Navigation from "@/components/ui/navigation/Navigation";
import Avatar from "../avatar/Avatar";
import SocialMediaList from "../socialMediaList/SocialMediaList";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <header>
        <Image src={logo} alt="Logo for Roman Robert" width={64} height={64} />
      </header>
      <div className={styles.navigationContent}>
        <Navigation />
        <footer>
          <Avatar />
          <SocialMediaList />
        </footer>
      </div>
    </aside>
  );
}
