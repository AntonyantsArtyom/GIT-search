export const GET_REPOSITORY_BY_ID = `
  query GetRepositoryById($id: ID!) {
    node(id: $id) {
      ... on Repository {
        name
        stargazerCount
        primaryLanguage {
          name
        }
        languages(first: 100) {
          nodes {
            name
          }
        }
        licenseInfo {
          name
          spdxId
        }
      }
    }
  }
`;
