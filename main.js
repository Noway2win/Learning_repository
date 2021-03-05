const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1");

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};
console.log(personaMovieDB);
const filmName1 = prompt("Назовите один из просмотренных фильмов?", "Семь"),
    filmMark1 = +prompt("Его оценка?", "7"),
    filmName2 = prompt("Назовите один из просмотренных фильмов?", "Семь"),
    filmMark2 = +prompt("Его оценка?", "7");
console.log(filmName1, filmMark1);
personaMovieDB.movies[`${filmName1}`] = filmMark1;
personaMovieDB.movies[`${filmName2}`] = filmMark2;
console.log(personaMovieDB);