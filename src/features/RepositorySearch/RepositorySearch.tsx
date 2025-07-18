import { Box, Button, TextField, Tooltip } from "@mui/material";
import { useState, type ChangeEventHandler } from "react";
import { setRepositoryName } from "@/entities/Repository/model/repositoriesSlice";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";

export const RepositorySearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => setInputValue(e.target.value.trim());
  const handleSearch = () => dispatch(setRepositoryName(inputValue));

  const isInputEmpty = inputValue === "";

  return (
    <Box className={styles.search}>
      <TextField autoComplete="off" id="repository" classes={{ root: styles.input }} placeholder="Введите поисковый запрос" value={inputValue} onChange={handleChange} />
      <Tooltip title={isInputEmpty ? "Введите запрос для поиска" : ""} arrow disableHoverListener={!isInputEmpty}>
        <span>
          <Button className={styles.button} variant="contained" onClick={handleSearch} disabled={isInputEmpty}>
            ИСКАТЬ
          </Button>
        </span>
      </Tooltip>
    </Box>
  );
};
