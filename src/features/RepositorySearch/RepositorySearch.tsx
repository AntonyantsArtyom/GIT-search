import { Box, Button, TextField } from "@mui/material";
import { useState, type ChangeEventHandler } from "react";
import styles from "./styles.module.scss";

export const RepositorySearch = () => {
  const [repository, setRepository] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => setRepository(e.target.value);

  return (
    <Box className={styles.search}>
      <TextField id="repository" classes={{ root: styles.input }} placeholder="Введите поисковый запрос" value={repository} onChange={handleChange} />
      <Button className={styles.button} variant="contained">
        ИСКАТЬ
      </Button>
    </Box>
  );
};
