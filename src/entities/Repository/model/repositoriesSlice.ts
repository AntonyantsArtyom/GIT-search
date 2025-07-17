import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RepositoriesState, Repository } from "../types/repositiry.types";

const initialState: RepositoriesState = {
  recordsPerPage: 10,
  repositoryName: "",
  isLoading: false,
  repositories: [],
  repositoryCount: 0,
  pageInfo: {
    hasNextPage: false,
    endCursor: null,
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
          endCursor: string | null;
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
  },
});

export const { setRepositories, setRecordsPerPage, setRepositoryName } = repositoriesSlice.actions;
export const repositoriesReducer = repositoriesSlice.reducer;
