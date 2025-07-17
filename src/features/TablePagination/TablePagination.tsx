import { Typography, Select, MenuItem, Box, type SelectChangeEvent } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { setCurrentPageAndDirection, setRecordsPerPage } from "../../entities/Repository/model/repositoriesSlice";

export const TablePagination = () => {
  const dispatch = useDispatch();

  const { recordsPerPage, repositoryCount, currentPage } = useSelector((state: RootState) => state.repositories);
  const handleChange = (event: SelectChangeEvent) => dispatch(setRecordsPerPage(Number(event.target.value)));
  const totalPages = Math.ceil(repositoryCount / recordsPerPage);

  const handleNext = () => dispatch(setCurrentPageAndDirection(currentPage + 1));
  const handlePrev = () => dispatch(setCurrentPageAndDirection(currentPage - 1));

  return (
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
  );
};
