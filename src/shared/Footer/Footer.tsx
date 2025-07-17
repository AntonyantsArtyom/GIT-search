import { Layout } from "antd";
import styles from "./styles.module.css";

const { Footer: AntdFooter } = Layout;

export const Footer = () => {
  return <AntdFooter className={styles.footer}></AntdFooter>;
};
