import { useSelector } from "react-redux";
import type { RootState } from "../../../store";

export const RepositoryList = () => {
  const { repositories } = useSelector((state: RootState) => state.repositories);

  return <>{JSON.stringify(repositories)}</>;
};
