import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RepositoriesState, Repository } from "../types/repositiry.types";

const initialState: RepositoriesState = {
  recordsPerPage: 10,
  orderBy: "stars",
  order: "desc",
  currentPage: 1,
  repositoryName: "",
  paginationDirection: "forward",
  isLoading: false,
  repositories: [],
  repositoryCount: 0,
  repositoryDetailsId: null,
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
    endCursor: null,
    startCursor: null,
  },
};

export const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  reducers: {
    /**
     * Sets the list of repositories, the total count of repositories and the page info
     *
     * @param {{ repositories: Repository[]; repositoryCount: number; pageInfo: { hasNextPage: boolean; hasPreviousPage: boolean; endCursor: string | null; startCursor: string | null; }; }} payload - the data to set
     */
    setRepositories: (
      state,
      action: PayloadAction<{
        repositories: Repository[];
        repositoryCount: number;
        pageInfo: {
          hasNextPage: boolean;
          hasPreviousPage: boolean;
          endCursor: string | null;
          startCursor: string | null;
        };
      }>
    ) => {
      state.repositories = action.payload.repositories;
      state.repositoryCount = action.payload.repositoryCount;
      state.pageInfo = action.payload.pageInfo;
    },

    /**
     * Sets the number of records to display per page
     *
     * @param {number} payload - the number of records per page
     */

    setRecordsPerPage: (state, action: PayloadAction<number>) => {
      state.recordsPerPage = action.payload;
    },
    /**
     * Sets the name of the repository to search for
     *
     * @param {string} payload - the name of the repository to search for
     */
    setRepositoryName: (state, action: PayloadAction<string>) => {
      state.repositoryName = action.payload;
    },
    /**
     * Sets the id of the repository for which to fetch the details
     *
     * @param {string | null} payload - the id of the repository to fetch the details or null to reset the state
     */
    setRepositoryDetailsId: (state, action: PayloadAction<string | null>) => {
      state.repositoryDetailsId = action.payload;
    },
    /**
     * Sets the current page and the direction of the pagination
     *
     * @param {number} payload - the page number to set
     */
    setCurrentPageAndDirection: (state, action: PayloadAction<number>) => {
      state.paginationDirection = state.currentPage > action.payload ? "backward" : "forward";
      state.currentPage = action.payload;
    },
    /**
     * Sets the order direction for sorting repositories
     *
     * @param {"asc" | "desc"} payload - the sorting order direction
     */

    setOrder: (state, action: PayloadAction<"asc" | "desc">) => {
      state.order = action.payload;
    },
    /**
     * Sets the field for sorting repositories
     *
     * @param {"stars" | "forks" | "updated"} payload - the field to sort by
     */
    setOrderField: (state, action: PayloadAction<"stars" | "forks" | "updated">) => {
      state.orderBy = action.payload;
    },
  },
});

export const { setRepositories, setRecordsPerPage, setRepositoryName, setCurrentPageAndDirection, setRepositoryDetailsId, setOrder, setOrderField } = repositoriesSlice.actions;
export const repositoriesReducer = repositoriesSlice.reducer;
