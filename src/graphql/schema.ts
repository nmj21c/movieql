import gql from "graphql-tag";

const typeDefs = gql`
    type Query {
        hello(name: String): String,
        name: String,
    }
`;

export default typeDefs;