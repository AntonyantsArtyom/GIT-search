import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RepositoriesState, Repository } from "../types/repositiry.types";

const initialState: RepositoriesState = {
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
    clearRepositories: (state) => {
      state.repositories = [];
      state.repositoryCount = 0;
      state.pageInfo = {
        hasNextPage: false,
        endCursor: null,
      };
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setRepositories, clearRepositories, setIsLoading } = repositoriesSlice.actions;
export const repositoriesReducer = repositoriesSlice.reducer;
