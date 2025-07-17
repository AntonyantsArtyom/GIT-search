import { Box, Typography } from "@mui/material";
import styles from "./styles.module.scss";

export const HelloMessage = () => {
  return (
    <Box className={styles.message_container}>
      <Typography variant="h3">Добро пожаловать</Typography>
    </Box>
  );
};
