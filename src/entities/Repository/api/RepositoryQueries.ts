import { api } from "@/api";
import type { GetRepositoryByIdResponse, SearchRepositoriesResponse } from "@/entities/Repository/types/repositiry.types";
import { SEARCH_REPOS_QUERY } from "@/entities/Repository/api/queries/searchRepos.query";
import { GET_REPOSITORY_BY_ID } from "@/entities/Repository/api/queries/getRepositoryById.query";

export const repositoriesApi = api.injectEndpoints({
  endpoints: (build) => ({
    searchRepos: build.query<
      SearchRepositoriesResponse,
      {
        query: string;
        first?: number;
        after?: string | null;
        last?: number;
        before?: string | null;
        orderBy?: "stars" | "forks" | "updated";
        order?: "asc" | "desc";
      }
    >({
      query: ({ query, first, after, last, before, orderBy = "stars", order = "desc" }) => {
        const sortPart = ` sort:${orderBy}-${order}`;
        return {
          url: "",
          method: "POST",
          body: {
            query: SEARCH_REPOS_QUERY,
            variables: {
              query: `${query}${sortPart}`,
              first,
              after,
              last,
              before,
            },
          },
        };
      },
    }),
    getRepositoryById: build.query<GetRepositoryByIdResponse, { id: string }>({
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
