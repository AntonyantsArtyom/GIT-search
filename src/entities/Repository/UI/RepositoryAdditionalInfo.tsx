import { useSelector } from "react-redux";
import { ChooseRepositoryMessage } from "../../../shared/ChoseRepositoryMessage/ChoseRepositoryMessage";
import styles from "./styles.module.scss";
import type { RootState } from "../../../store";
import { useGetRepositoryByIdQuery } from "../api/RepositoryQueries";
import { LoadingMessage } from "../../../shared/LoadingMessage/HelloMessage";
import { useMemo } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Box, Chip, Typography } from "@mui/material";

export const RepositoryAdditionalInfo = () => {
  const { repositoryDetailsId } = useSelector((state: RootState) => state.repositories);

  const { data, isFetching } = useGetRepositoryByIdQuery({ id: repositoryDetailsId! }, { skip: !repositoryDetailsId });
  const repository = data?.data?.node;

  const BlockForRender = useMemo(() => {
    if (!repositoryDetailsId) {
      return <ChooseRepositoryMessage />;
    }
    if (isFetching) {
      return <LoadingMessage />;
    }

    return (
      <Box className={styles.information}>
        <Typography variant="h4">{repository.name}</Typography>
        <Box className={styles.starsAndLanguage}>
          <Chip className={styles.mainLanguage} color="primary" label={repository.primaryLanguage?.name || "—"} variant="outlined" />
          <Box className={styles.stars}>
            <StarIcon />
            <Typography variant="body1">{repository.stargazerCount}</Typography>
          </Box>
        </Box>
        <Box className={styles.languages}>
          {repository.languages?.nodes.map((lang: any) => (
            <Chip label={lang.name} variant="outlined" />
          ))}
        </Box>
        <Typography variant="body1">{repository.licenseInfo?.name || "—"}</Typography>
      </Box>
    );
  }, [isFetching, repositoryDetailsId]);

  return <div className={styles.additionalBlock}>{BlockForRender}</div>;
};
