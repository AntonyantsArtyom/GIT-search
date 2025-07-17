import { api } from "../../../api";
import { SEARCH_REPOS_QUERY } from "./queries/searchRepos.query";
import { GET_REPOSITORY_BY_ID } from "./queries/getRepositoryById.query";

export const repositoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchRepos: build.query<any, { query: string; first?: number; after?: string | null; last?: number; before?: string | null }>({
      query: ({ query, first, after, last, before }) => ({
        url: "",
        method: "POST",
        body: {
          query: SEARCH_REPOS_QUERY,
          variables: { query, first, after, last, before },
        },
      }),
    }),
    getRepositoryById: build.query<any, { id: string }>({
      query: ({ id }) => ({
        url: "",
        method: "POST",
        body: {
          query: GET_REPOSITORY_BY_ID,
          variables: { id },
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSearchReposQuery, useLazySearchReposQuery, useGetRepositoryByIdQuery, useLazyGetRepositoryByIdQuery } = repositoriesApi;
