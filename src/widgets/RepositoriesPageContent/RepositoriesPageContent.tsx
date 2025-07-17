import { useEffect, useMemo, useState } from "react";
import { RepositoryList } from "../../entities/Repository/UI/RepositoryList";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { HelloMessage } from "../../shared/HelloMessage/HelloMessage";
import { NotFountMessage } from "../../shared/NotFountMessage/NotFountMessage";
import { LoadingMessage } from "../../shared/LoadingMessage/HelloMessage";
import { TablePagination } from "../../features/TablePagination/TablePagination";
import { reposApi, useLazySearchReposQuery } from "../../entities/Repository/api/useSearchReposQuery";
import { setRepositories } from "../../entities/Repository/model/repositoriesSlice";

export const RepositoriesPageContent = () => {
  const [isHelloMessage, setIsHelloMessage] = useState(true);
  const { repositories, repositoryName, recordsPerPage } = useSelector((state: RootState) => state.repositories);
  const dispatch = useDispatch();

  const isFetching = useSelector(
    (state: RootState) =>
      reposApi.endpoints.searchRepos.select({
        query: repositoryName,
        first: recordsPerPage,
      })(state)?.isLoading
  );

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

  useEffect(() => {
    if (!repositoryName) return;
    triggerSearch({ query: repositoryName, first: recordsPerPage });
  }, [recordsPerPage, repositoryName]);

  useEffect(() => {
    if (isFetching) {
      setIsHelloMessage(false);
    }
  }, [isFetching]);

  const BlockForRender = useMemo(() => {
    if (isHelloMessage) {
      return <HelloMessage />;
    }
    if (isFetching) {
      return <LoadingMessage />;
    }
    if (!isHelloMessage && !repositories.length) {
      return <NotFountMessage />;
    }
    return (
      <div>
        <RepositoryList />
        <TablePagination />
      </div>
    );
  }, [isHelloMessage, repositories, isFetching]);

  return <>{BlockForRender}</>;
};
