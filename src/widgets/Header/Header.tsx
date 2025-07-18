import { AppBar, Toolbar } from "@mui/material";
import { RepositorySearch } from "@/features/RepositorySearch/RepositorySearch";
import styles from "./styles.module.scss";

export const Header = () => {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <RepositorySearch />
      </Toolbar>
    </AppBar>
  );
};
