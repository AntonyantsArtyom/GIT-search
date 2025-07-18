import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, TableSortLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import styles from "./styles.module.scss";
import { setRepositoryDetailsId, setOrder, setOrderField } from "../model/repositoriesSlice";

export const RepositoryList = () => {
  const dispatch = useDispatch();
  const { repositories, order, orderBy } = useSelector((state: RootState) => state.repositories);

  const handleSort = (field: "stars" | "forks" | "updated") => {
    if (orderBy === field) {
      dispatch(setOrder(order === "asc" ? "desc" : "asc"));
    } else {
      dispatch(setOrder("desc"));
      dispatch(setOrderField(field));
    }
  };
  const handleRowClick = (id: string) => dispatch(setRepositoryDetailsId(id));

  return (
    <div className={styles.listContainer}>
      <Typography variant="h3">Результаты поиска</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Язык</TableCell>
              <TableCell>
                <TableSortLabel active={orderBy === "forks"} direction={orderBy === "forks" ? order : "desc"} onClick={() => handleSort("forks")}>
                  Число форков
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel active={orderBy === "stars"} direction={orderBy === "stars" ? order : "desc"} onClick={() => handleSort("stars")}>
                  Число звезд
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel active={orderBy === "updated"} direction={orderBy === "updated" ? order : "desc"} onClick={() => handleSort("updated")}>
                  Дата обновления
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repositories.map((repository) => (
              <TableRow key={repository.id} onClick={() => handleRowClick(repository.id)} hover>
                <TableCell>{repository.name}</TableCell>
                <TableCell>{repository.primaryLanguage?.name || "—"}</TableCell>
                <TableCell>{repository.forkCount}</TableCell>
                <TableCell>{repository.stargazerCount}</TableCell>
                <TableCell>{new Date(repository.updatedAt).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
