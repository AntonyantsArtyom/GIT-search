import { Box, CircularProgress } from "@mui/material";
import styles from "./styles.module.scss";

export const LoadingMessage = () => {
  return (
    <Box className={styles.message_container}>
      <CircularProgress />
    </Box>
  );
};
