import { useSelector } from "react-redux";
import { ChooseRepositoryMessage } from "../../../shared/ChoseRepositoryMessage/ChoseRepositoryMessage";
import styles from "./styles.module.scss";
import type { RootState } from "../../../store";
import { useGetRepositoryByIdQuery } from "../api/RepositoryQueries";
import { LoadingMessage } from "../../../shared/LoadingMessage/HelloMessage";
import { useMemo } from "react";

export const RepositoryFullInfo = () => {
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
      <>
        <h2>{repository.name}</h2>
        <p>⭐ {repository.stargazerCount}</p>
        <p>{repository.primaryLanguage?.name || "—"}</p>
        <p>{repository.languages?.nodes.map((lang: any) => lang.name).join(", ") || "—"}</p>
        <p>{repository.licenseInfo?.name || "—"}</p>
      </>
    );
  }, [isFetching, repositoryDetailsId]);

  return <div className={styles.fullinfo}>{BlockForRender}</div>;
};
