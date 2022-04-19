const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Link {
    url: String
    slug: String
  }

  type Query {
    link: [Link]
  }
`;

const link = [
  {
    url: "facebook.com",
    slug: "sdlfkjasl"
  }
];

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    link: () => link
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
