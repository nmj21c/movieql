import gql from "graphql-tag";

const typeDefs = gql`
    type Movie {
        id: Int!
        title: String
        rating: Float
        summary: String
        language: String
        medium_cover_image: String
    },

    type Query {
        hello(name: String): String,
        name: String,
        movies(limit: Int, rating: Float): [Movie]
        movie(id: Int): Movie
        suggestions(id: Int): [Movie]

    }
`;

export default typeDefs;