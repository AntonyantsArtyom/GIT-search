import { useEffect, useMemo, useRef, useState } from "react";
import { RepositoryList } from "@/entities/Repository/UI/RepositoryList";
import type { RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { NotFountMessage } from "@/shared/Messages/NotFountMessage";
import { LoadingMessage } from "@/shared/Messages/LoadingMessage";
import { TablePagination } from "@/features/TablePagination/TablePagination";
import { useLazySearchReposQuery } from "@/entities/Repository/api/RepositoryQueries";
import { setCurrentPageAndDirection, setRepositories } from "@/entities/Repository/model/repositoriesSlice";
import { RepositoryAdditionalInfo } from "@/entities/Repository/UI/RepositoryAdditionalInfo";
import { HelloMessage } from "@/shared/Messages/HelloMessage";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

export const RepositoriesPageContent = () => {
  const [isHelloMessage, setIsHelloMessage] = useState(true);
  const { repositories, repositoryName, recordsPerPage, paginationDirection, pageInfo, currentPage, repositoryDetailsId, order, orderBy } = useSelector((state: RootState) => state.repositories);
  const dispatch = useDispatch();

  const [triggerSearch, { data, isFetching }] = useLazySearchReposQuery();

  useEffect(() => {
    if (data) {
      const { edges, repositoryCount, pageInfo } = data.data.search;
      const repositories = edges.map((edge) => edge.node);

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

  const prevRepositoryName = useRef(repositoryName);
  const prevRecordsPerPage = useRef(recordsPerPage);
  const prevOrder = useRef(order);
  const prevOrderBy = useRef(orderBy);

  useEffect(() => {
    if (!repositoryName) {
      return;
    }

    if (prevRepositoryName.current !== repositoryName || prevRecordsPerPage.current !== recordsPerPage || prevOrder.current !== order || prevOrderBy.current !== orderBy) {
      setCurrentPageAndDirection(1);
      prevRepositoryName.current = repositoryName;
      prevRecordsPerPage.current = recordsPerPage;
      prevOrder.current = order;
      prevOrderBy.current = orderBy;
      triggerSearch({
        query: repositoryName,
        first: recordsPerPage,
        after: null,
        orderBy,
        order,
      });
      return;
    }

    if (paginationDirection === "forward") {
      triggerSearch({
        query: repositoryName,
        first: recordsPerPage,
        after: pageInfo.endCursor,
        orderBy,
        order,
      });
    } else if (paginationDirection === "backward") {
      triggerSearch({
        query: repositoryName,
        last: recordsPerPage,
        before: pageInfo.startCursor,
        orderBy,
        order,
      });
    }
  }, [repositoryName, recordsPerPage, currentPage, order, orderBy]);

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
      <Box className={styles.resositories_content}>
        <Box className={styles.main_info}>
          <RepositoryList />
          <TablePagination />
        </Box>
        <RepositoryAdditionalInfo />
      </Box>
    );
  }, [isHelloMessage, repositories, isFetching, repositoryDetailsId]);

  return <>{BlockForRender}</>;
};
