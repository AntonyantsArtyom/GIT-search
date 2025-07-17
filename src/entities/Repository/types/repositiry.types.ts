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

export interface RepositoriesState {
  recordsPerPage: number;
  repositoryName: string;
  isLoading: boolean;
  repositories: Repository[];
  repositoryCount: number;
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string | null;
  };
}
