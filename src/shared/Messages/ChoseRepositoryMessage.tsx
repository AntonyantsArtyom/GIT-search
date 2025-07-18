import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export const ChooseRepositoryMessage = () => {
  return (
    <Box className={styles.message_container}>
      <Typography variant="body1">Выберите репозиторий</Typography>
    </Box>
  );
};
