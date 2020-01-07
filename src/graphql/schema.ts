import gql from "graphql-tag";

const typeDefs = gql`
    type Person {
        id: Int!
        name: String
        age: Int
        gender: String
    },

    type Query {
        hello(name: String): String,
        name: String,
        people: [Person]
        person(id: Int): Person 
    }
`;

export default typeDefs;