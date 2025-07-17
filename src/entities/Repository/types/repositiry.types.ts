export type Repository = {
  id: string;
  name: string;
  language: string;
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
