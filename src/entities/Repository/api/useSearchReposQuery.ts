import { api } from "../../../api";
import { SEARCH_REPOS_QUERY } from "./queries/searchRepos.query";

export const reposApi = api.injectEndpoints({
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
  }),
  overrideExisting: false,
});

export const { useSearchReposQuery, useLazySearchReposQuery } = reposApi;
