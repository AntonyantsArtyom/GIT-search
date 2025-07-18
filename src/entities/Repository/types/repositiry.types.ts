/**
 * Repository type
 *
 * @prop {string} id - repository id
 * @prop {string} name - repository name
 * @prop {number} stargazerCount - number of stars
 * @prop {number} forkCount - number of forks
 * @prop {string} updatedAt - updated date
 * @prop {string} [description] - repository description
 * @prop {{ name: string }} [licenseInfo] - license information
 * @prop {{ name: string }} [primaryLanguage] - primary language
 */
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

/**
 * Repository details type
 *
 * @prop {string} id - repository id
 * @prop {string} name - repository name
 * @prop {number} stargazerCount - number of stars
 * @prop {{ name: string }} [primaryLanguage] - primary language
 * @prop {{ name: string }[]} languages - list of languages
 * @prop {{ name: string; spdxId: string }} [licenseInfo] - license information
 */
export type RepositoryDetails = {
  id: string;
  name: string;
  stargazerCount: number;
  primaryLanguage?: { name: string } | null;
  languages: { name: string }[];
  licenseInfo?: { name: string; spdxId: string } | null;
};

/**
 * State type
 *
 * @prop {number} recordsPerPage - number of records per page
 * @prop {"stars" | "forks" | "updated"} [orderBy] - field to sort by
 * @prop {"desc" | "asc"} order - order of sorting
 * @prop {number} currentPage - current page
 * @prop {"forward" | "backward"} paginationDirection - direction of pagination
 * @prop {string} repositoryName - repository name for search
 * @prop {boolean} isLoading - is loading flag
 * @prop {Repository[]} repositories - list of repositories
 * @prop {number} repositoryCount - total number of repositories
 * @prop {string | null | undefined} repositoryDetailsId - repository id for which to load detailed information
 * @prop {{ hasNextPage: boolean; hasPreviousPage: boolean; startCursor: string | null; endCursor: string | null }} pageInfo - information about the page
 */
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
  repositoryDetailsId?: string | null | undefined;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null;
    endCursor: string | null;
  };
}

/**
 * Repository search node type
 *
 * @prop {string} id - repository id
 * @prop {string} name - repository name
 * @prop {number} stargazerCount - number of stars
 * @prop {string} [language] - language
 * @prop {number} forkCount - number of forks
 * @prop {string} updatedAt - updated date
 */
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

/**
 * Search repositories response type
 *
 * @prop {number} repositoryCount - total number of repositories
 * @prop {{ startCursor: string | null; endCursor: string | null; hasNextPage: boolean; hasPreviousPage: boolean }} pageInfo - information about the page
 * @prop {RepositorySearchNode[]} edges - list of nodes, each containing information about a repository
 */
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

/**
 * Get repository by id response type
 *
 * @prop {{ name: string; stargazerCount: number; primaryLanguage?: { name: string } | null; languages: { nodes: { name: string }[] }; licenseInfo?: { name: string } | null }} node - repository information
 */
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
