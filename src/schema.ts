// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Game {
    id: ID!,
    title: String!
    platform: [String!]!
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }

  type Query {
    reviews: [Review]!
    games: [Game]!
    author: [Author]!
  }
`;

export default typeDefs;
