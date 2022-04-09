const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Link {
    url: String
    slug: String
  }
`;

const cache = LRU({ max: 50, maxAge: 1000 * 60 * 60 });

// Provide resolver functions for your schema fields
const resolvers = {
  Query: { 
    getUrl: () => {
       return{
     url: (root, args, context) => "Mandy",
     slug: (root, args, context) => "HEY"  
  }
 Mutation: {
  createUrl(input: Link): String!
 }

const server = new ApolloServer({
  typeDefs,z
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
