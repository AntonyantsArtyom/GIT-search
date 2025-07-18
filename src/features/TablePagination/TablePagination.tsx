import { useState } from "react";
import { Typography, Select, MenuItem, Box, Snackbar, Alert, type SelectChangeEvent } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPageAndDirection, setRecordsPerPage } from "@/entities/Repository/model/repositoriesSlice";
import type { RootState } from "@/store";
import styles from "./styles.module.scss";

export const TablePagination = () => {
  const dispatch = useDispatch();
  const { recordsPerPage, repositoryCount, currentPage } = useSelector((state: RootState) => state.repositories);

  const [alert, setAlert] = useState<null | string>(null);
  const totalPages = Math.ceil(repositoryCount / recordsPerPage);

  const handleChange = (event: SelectChangeEvent) => dispatch(setRecordsPerPage(Number(event.target.value)));

  const handleNext = () => {
    if (currentPage >= totalPages) {
      setAlert("Вы уже на последней странице");
      return;
    }
    dispatch(setCurrentPageAndDirection(currentPage + 1));
  };

  const handlePrev = () => {
    if (currentPage <= 1) {
      setAlert("Вы уже на первой странице");
      return;
    }
    dispatch(setCurrentPageAndDirection(currentPage - 1));
  };

  return (
    <>
      <Box className={styles.pagination}>
        <Box className={styles.count}>
          <Typography variant="body1">Записей на странице:</Typography>
          <Select className={styles.select} value={recordsPerPage.toString()} onChange={handleChange}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
          </Select>
        </Box>

        <Typography variant="body1">
          {currentPage} из {totalPages}
        </Typography>
        <Box>
          <ChevronLeftIcon className={styles.nav_icon} onClick={handlePrev} />
          <ChevronRightIcon className={styles.nav_icon} onClick={handleNext} />
        </Box>
      </Box>

      <Snackbar open={!!alert} autoHideDuration={3000} onClose={() => setAlert(null)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert severity="info" onClose={() => setAlert(null)}>
          {alert}
        </Alert>
      </Snackbar>
    </>
  );
};
