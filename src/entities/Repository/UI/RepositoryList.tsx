import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import styles from "./styles.module.scss";
import { setRepositoryDetailsId } from "../model/repositoriesSlice";

export const RepositoryList = () => {
  const { repositories } = useSelector((state: RootState) => state.repositories);
  const dispatch = useDispatch();

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
              <TableCell>Число форков</TableCell>
              <TableCell>Число звезд</TableCell>
              <TableCell>Дата обновления</TableCell>
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
