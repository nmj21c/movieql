// import { getById, getMovies, addMovie, Movie, removeMovie } from "./datasource";

import { Movie, MovieApi } from "./movieDatasource";

const movieDatasource = new MovieApi();

const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name || 'world'}`,
        name: () => 'Jonghyun',
        movies: async () => await movieDatasource.getMovies()
    }
};

export default resolvers;