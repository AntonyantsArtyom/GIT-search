import { useEffect, useMemo, useRef, useState } from "react";
import { RepositoryList } from "../../entities/Repository/UI/RepositoryList";
import type { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { HelloMessage } from "../../shared/HelloMessage/HelloMessage";
import { NotFountMessage } from "../../shared/NotFountMessage/NotFountMessage";
import { LoadingMessage } from "../../shared/LoadingMessage/HelloMessage";
import { TablePagination } from "../../features/TablePagination/TablePagination";
import { reposApi, useLazySearchReposQuery } from "../../entities/Repository/api/useSearchReposQuery";
import { setCurrentPageAndDirection, setPaginationDirection, setRepositories } from "../../entities/Repository/model/repositoriesSlice";

export const RepositoriesPageContent = () => {
  const [isHelloMessage, setIsHelloMessage] = useState(false);
  const { repositories, repositoryName, recordsPerPage, paginationDirection, pageInfo, currentPage } = useSelector((state: RootState) => state.repositories);
  const dispatch = useDispatch();

  const isFetching = false;

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
    if (isFetching) {
      setIsHelloMessage(false);
    }
  }, [isFetching]);

  useEffect(() => {
    dispatch(setCurrentPageAndDirection(1));
  }, [repositoryName, recordsPerPage]);

  const prevRepositoryName = useRef(repositoryName);
  const prevRecordsPerPage = useRef(recordsPerPage);

  useEffect(() => {
    if (prevRepositoryName.current !== repositoryName || prevRecordsPerPage.current !== recordsPerPage) {
      prevRepositoryName.current = repositoryName;
      prevRecordsPerPage.current = recordsPerPage;
      dispatch(setCurrentPageAndDirection(1));
    }

    if (paginationDirection === "forward") {
      triggerSearch({
        query: repositoryName,
        first: recordsPerPage,
        after: pageInfo.endCursor ?? null,
      });
    } else if (paginationDirection === "backward") {
      triggerSearch({
        query: repositoryName,
        last: recordsPerPage,
        before: pageInfo.startCursor ?? null,
      });
    }
  }, [repositoryName, recordsPerPage, currentPage]);

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
