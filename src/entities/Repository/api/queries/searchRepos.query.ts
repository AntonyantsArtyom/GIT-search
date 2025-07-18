export const SEARCH_REPOS_QUERY = `
  query SearchRepos(
    $query: String!,
    $first: Int,
    $after: String,
    $last: Int,
    $before: String
  ) {
    search(
      query: $query,
      type: REPOSITORY,
      first: $first,
      after: $after,
      last: $last,
      before: $before
    ) {
      repositoryCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ... on Repository {
            id
            name
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
