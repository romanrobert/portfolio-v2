import Link from "next/link";
import styles from "@/components/ui/button/button.module.css";

interface ButtonProps {
  href: string;
  message: string;
  icon: JSX.Element | null;
  newTab?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href = "/",
  message = "Click me",
  icon = null,
  newTab = false,
}) => {
  return (
    <Link
      className={styles.button}
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <span>{message}</span>
      {icon}
    </Link>
  );
};

export default Button;
