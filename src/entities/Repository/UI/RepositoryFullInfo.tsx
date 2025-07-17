import { useSelector } from "react-redux";
import { ChooseRepositoryMessage } from "../../../shared/ChoseRepositoryMessage/ChoseRepositoryMessage";
import styles from "./styles.module.scss";
import type { RootState } from "../../../store";

export const RepositoryFullInfo = () => {
  const { repositoryDetailsId } = useSelector((state: RootState) => state.repositories);

  return <div className={styles.fullinfo}>{repositoryDetailsId ? repositoryDetailsId : <ChooseRepositoryMessage />}</div>;
};
