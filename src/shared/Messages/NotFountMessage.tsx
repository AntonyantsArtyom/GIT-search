import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export const NotFountMessage = () => {
  return (
    <Box className={styles.message_container}>
      <Typography variant="h3">Ничего не найдено</Typography>
    </Box>
  );
};
