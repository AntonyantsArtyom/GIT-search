import { Box, Button, TextField } from "@mui/material";
import { useEffect, useState, type ChangeEventHandler } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { setRepositories } from "../../entities/Repository/model/repositoriesSlice";
import { useLazySearchReposQuery } from "../../entities/Repository/api/useSearchReposQuery";

export const RepositorySearch = () => {
  const dispatch = useDispatch();
  const [repository, setRepository] = useState("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRepository(e.target.value);
  };

  const [triggerSearch, { data }] = useLazySearchReposQuery();

  useEffect(() => {
    if (data) {
      const { edges, repositoryCount, pageInfo } = data.data.search;

      const repositories = edges.map((edge: any) => edge.node);

      dispatch(
        setRepositories({
          repositories,
          repositoryCount,
          pageInfo,
        })
      );
    }
  }, [data, dispatch]);

  const handleSearch = () => {
    if (repository.trim()) {
      triggerSearch({ query: repository });
    }
  };

  return (
    <Box className={styles.search}>
      <TextField id="repository" classes={{ root: styles.input }} placeholder="Введите поисковый запрос" value={repository} onChange={handleChange} />
      <Button className={styles.button} variant="contained" onClick={handleSearch}>
        ИСКАТЬ
      </Button>
    </Box>
  );
};
