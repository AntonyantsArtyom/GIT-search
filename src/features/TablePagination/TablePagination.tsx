import { Typography, Select, MenuItem, Box } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./styles.module.scss";

export const TablePagination = () => {
  return (
    <Box className={styles.pagination}>
      <Box className={styles.count}>
        <Typography variant="body1">Записей на странице:</Typography>
        <Select className={styles.select} defaultValue={10}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
        </Select>
      </Box>

      <Typography variant="body1">1 из 4</Typography>
      <Box>
        <ChevronLeftIcon className={styles.nav_icon} />
        <ChevronRightIcon className={styles.nav_icon} />
      </Box>
    </Box>
  );
};
