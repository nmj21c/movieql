import { RESTDataSource } from "apollo-datasource-rest";
import { InMemoryLRUCache } from "apollo-server-caching";

export interface Movie {
    id: number,
    title: string,
    rating: number,
    summary: string,
    language: string,
    medium_cover_image: string
}

export class MovieApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://yts.lt/api/v2/";
        this.initialize({ context:{}, cache: new InMemoryLRUCache() });      // apollo datasource를 외부에서 사용 시 initialize 처리 해주어야 함
    }

    private static LIST_MOVIES_API:string = "list_movies";
    private static MOVIE_DETAILS_API:string = "movie_details";
    private static MOVIE_SUGGESTIONS_API:string = "movie_suggestions";

    movieReducer(movie): Movie {
        return {
            id: movie.id || 0,
            title: movie.title,
            rating: movie.rating,
            summary: movie.summary,
            language: movie.language,
            medium_cover_image: movie.medium_cover_image
        };
    }

    async getMovies(limit:number, rating:number): Promise<Movie[]> {
        const res = await this.get(`${MovieApi.LIST_MOVIES_API}.json`, {"limit": limit, "minimum_rating": rating});

        if(res && res.status === "ok" && res.data && res.data.movies) {
            return Array.isArray(res.data.movies) ?
            res.data.movies.map(movie => this.movieReducer(movie)) : []
        }

        return [];
    }

    async getMovie(id: number): Promise<Movie> {
        const res = await this.get(`${MovieApi.MOVIE_DETAILS_API}.json`, {"movie_id": id});

        if(res && res.status === "ok" && res.data && res.data.movie) {
            return this.movieReducer(res.data.movie);
        }

        return null;
    }

    async getSuggestions(id: number): Promise<Movie[]> {
        const res = await this.get(`${MovieApi.MOVIE_SUGGESTIONS_API}.json`, {"movie_id": id});

        if(res && res.status === "ok" && res.data && res.data.movies) {
            return Array.isArray(res.data.movies) ?
            res.data.movies.map(movie => this.movieReducer(movie)) : []
        }

        return [];
    }
}