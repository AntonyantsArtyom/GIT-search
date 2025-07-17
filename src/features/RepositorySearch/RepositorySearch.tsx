import { Box, Button, TextField } from "@mui/material";
import { useState, type ChangeEventHandler } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { setRepositoryName } from "../../entities/Repository/model/repositoriesSlice";

export const RepositorySearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => setInputValue(e.target.value.trim());
  const handleSearch = () => dispatch(setRepositoryName(inputValue));

  return (
    <Box className={styles.search}>
      <TextField autoComplete="off" id="repository" classes={{ root: styles.input }} placeholder="Введите поисковый запрос" value={inputValue} onChange={handleChange} />
      <Button className={styles.button} variant="contained" onClick={handleSearch}>
        ИСКАТЬ
      </Button>
    </Box>
  );
};
