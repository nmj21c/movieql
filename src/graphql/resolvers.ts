// import { getById, getMovies, addMovie, Movie, removeMovie } from "./datasource";

import { Movie, MovieApi } from "./movieDatasource";

const movieDatasource = new MovieApi();

const resolvers = {
    Query: {
        hello: (_, {name}) => `Hello ${name || 'world'}`,
        name: () => 'Jonghyun',
        movies: async (_, {limit = 10, rating = 9.0}): Promise<Movie[]> => await movieDatasource.getMovies(limit, rating),
        movie: async (_, {id}): Promise<Movie> => await movieDatasource.getMovie(id),
        suggestions: async(_, {id}): Promise<Movie[]> => await movieDatasource.getSuggestions(id)
    }
};

export default resolvers;