export interface Movie {
    id: number,
    name: string,
    score: number
}

let movies:Movie[] =  [
    {
        id: 0,
        name: "Start Wars",
        score: 1
    },
    {
        id: 1,
        name: "Avengers2",
        score: 8
    },
    {
        id: 2,
        name: "Then Godfather I",
        score: 99
    },
    {
        id: 3,
        name: "Loggan",
        score: 2
    }
];

/**
 * 영화정보 리스트 반환
 */
export const getMovies = () => movies;

/**
 * 영화 정보 반환
 * @param id 
 */
export const getById = (id:Number): Movie => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

/**
 * 
 * @param name 
 * @param score 
 */
export const addMovie = (name: string, score: number): Movie[] => {
    let movieList = movies;
    movieList.push({
        "id": 7,
        "name": name,
        "score": score
    });

    return movies;
}

/**
 * 
 * @param id 
 */
export const removeMovie = (id: Number): boolean => {
    const removedMovie = movies.filter(movie => movie.id !== id);
    if(movies.length > removeMovie.length) {
        movies = removedMovie;
        return true;
    }

    return false;
}

