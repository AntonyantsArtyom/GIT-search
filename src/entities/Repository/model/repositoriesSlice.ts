import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RepositoriesState, Repository } from "../types/repositiry.types";

const initialState: RepositoriesState = {
  recordsPerPage: 10,
  currentPage: 1,
  repositoryName: "",
  paginationDirection: "forward",
  isLoading: false,
  repositories: [],
  repositoryCount: 0,
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

    setRecordsPerPage: (state, action: PayloadAction<number>) => {
      state.recordsPerPage = action.payload;
    },
    setRepositoryName: (state, action: PayloadAction<string>) => {
      state.repositoryName = action.payload;
    },
    setPaginationDirection: (state, action: PayloadAction<"forward" | "backward">) => {
      state.paginationDirection = action.payload;
    },
    setCurrentPageAndDirection: (state, action: PayloadAction<number>) => {
      state.paginationDirection = state.currentPage > action.payload ? "backward" : "forward";
      state.currentPage = action.payload;
    },
  },
});

export const { setRepositories, setRecordsPerPage, setRepositoryName, setPaginationDirection, setCurrentPageAndDirection } = repositoriesSlice.actions;
export const repositoriesReducer = repositoriesSlice.reducer;
