const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type LINK {
    url: String
    slug: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    url: (root, args, context) => "Mandy",
    slug: (root, args, context) => "HEY"
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
