export type Repository = {
  id: string;
  name: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  description?: string;
  licenseInfo?: { name: string } | null;
  primaryLanguage?: { name: string } | null;
};

export type RepositoryDetails = {
  id: string;
  name: string;
  stargazerCount: number;
  primaryLanguage?: { name: string } | null;
  languages: { name: string }[];
  licenseInfo?: { name: string; spdxId: string } | null;
};

export interface RepositoriesState {
  recordsPerPage: number;
  orderBy?: "stars" | "forks" | "updated";
  order: "desc" | "asc";
  currentPage: number;
  paginationDirection: "forward" | "backward";
  repositoryName: string;
  isLoading: boolean;
  repositories: Repository[];
  repositoryCount: number;
  repositoryDetailsId?: string | null;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
}

export interface RepositorySearchNode {
  node: {
    id: string;
    name: string;
    stargazerCount: number;
    language?: string;
    forkCount: number;
    updatedAt: string;
  };
}

export interface SearchRepositoriesResponse {
  data: {
    search: {
      repositoryCount: number;
      pageInfo: {
        startCursor: string | null;
        endCursor: string | null;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      };
      edges: RepositorySearchNode[];
    };
  };
}

export interface GetRepositoryByIdResponse {
  data: {
    node: {
      name: string;
      stargazerCount: number;
      primaryLanguage?: {
        name: string;
      } | null;
      languages: {
        nodes: {
          name: string;
        }[];
      };
      licenseInfo?: {
        name: string;
      } | null;
    };
  };
}
