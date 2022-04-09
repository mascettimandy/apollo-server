const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    name: String
    book: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    name: (root, args, context) => "Mandy",
    book: (root, args, context) => "HEY"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
