export const SEARCH_REPOS_QUERY = `
  query SearchRepos($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: REPOSITORY, first: $first, after: $after) {
      repositoryCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Repository {
            id
            name
            url
            stargazerCount
            forkCount
            updatedAt
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;
