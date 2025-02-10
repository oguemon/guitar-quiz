import { FC } from "react";
import styles from "./Page.module.css";
import "../styles/global.css";

export const Page: FC = () => {
  return <p className={styles.module}>Hello, World!</p>;
};
