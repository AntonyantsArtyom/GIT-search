import { Layout } from "antd";
import styles from "./styles.module.scss";
import { RepositorySearch } from "../../features/RepositorySearch/RepositorySearch";

const { Header: AntdHeader } = Layout;

export const Header = () => {
  return (
    <AntdHeader className={styles.header}>
      <RepositorySearch />
    </AntdHeader>
  );
};
