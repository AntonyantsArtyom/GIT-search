import { AppBar, Toolbar } from "@mui/material";
import styles from "./styles.module.scss";
import { RepositorySearch } from "../../features/RepositorySearch/RepositorySearch";

export const Header = () => {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <RepositorySearch />
      </Toolbar>
    </AppBar>
  );
};
