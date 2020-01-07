import * as path from "path";
import { GraphQLServer } from "graphql-yoga";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";

const allTypes = fileLoader(path.join(__dirname, "./graphql/**/schema*.js"));
const allResolvers = fileLoader(path.join(__dirname, "./graphql/**/resolvers*.js"));

const server: GraphQLServer = new GraphQLServer({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
});

server.start(() => console.log("Graphql server Running as localhost:4000 test"));