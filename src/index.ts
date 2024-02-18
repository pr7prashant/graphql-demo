import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema.js";

// Database
import _db from "./_db.js";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    games: () => _db.games,
    game: (_, { id }) => _db.games.find((g) => g.id === id),
    authors: () => _db.authors,
    author: (_, { id }) => _db.authors.find((a) => a.id === id),
    reviews: () => _db.reviews,
    review: (_, { id }) => _db.reviews.find((r) => r.id === id),
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
