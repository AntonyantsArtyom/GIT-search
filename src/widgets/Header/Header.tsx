import { Layout } from "antd";
import styles from "./styles.module.css";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  return <AntdHeader className={styles.header}></AntdHeader>;
};
