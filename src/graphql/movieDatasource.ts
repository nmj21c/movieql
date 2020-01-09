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
        // this.initialize({context:{}, cache: {} as KeyValueCache});      // apollo datasource를 외부에서 사용 시 initialize 처리 해주어야 함
    }

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

    async getMovies() {
        // const response = await this.get('list_movies.json');
        const data = await this.get(`list_movies.json`);

        if(data && data.status === "ok" && data.data && data.data.movies) {
            return Array.isArray(data.data.movies) ?
                data.data.movies.map(movie => this.movieReducer(movie)) : []
        }

        return [];
    }
}