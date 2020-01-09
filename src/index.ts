import * as path from "path";
import { GraphQLServer } from "graphql-yoga";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import session from "express-session";
import ms from "ms";

const allTypes = fileLoader(path.join(__dirname, "./graphql/**/schema*.js"));
const allResolvers = fileLoader(path.join(__dirname, "./graphql/**/resolvers*.js"));

const context = req => ({
    req: req.request
});

const opts = {
    port: 4000,
    cors: {
        credentials: true,
        origin: ['http://localhost:8080']
    }
}

const server: GraphQLServer = new GraphQLServer({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers),
    context: context
});

// console.log(`node_env \ ${process.env.NODE_ENV}`);
// server.express.use(session({
//     name: 'qid',
//     secret: '',
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//         maxAge: ms('1d')
//     }
// }));

server.start(opts, () => console.log("Graphql server Running at localhost:4000"));