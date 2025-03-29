import { Avatar } from "@chakra-ui/react";
import styles from "./MainLayout.module.scss";

export const MainLayout = (props: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  );
};

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <Avatar.Root>
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root>
      </div>
    </div>
  );
};

export const Footer = () => {
  return <div className={styles.footer}></div>;
};
