"use strict";
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1");
if (numberOfFilms.isNaN || numberOfFilms < 0 || numberOfFilms == null) {
    alert('Вы лжете');
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1");
}
const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};
let filmName,
    filmMark;
for (let i = 0; i < 2; i++) {
    filmName = prompt("Назовите один из просмотренных фильмов?", "Семь");
    if (filmName.length == 0 || filmName.length >= 50 || filmName == null || filmMark == null) {
        alert('Введите правду');
        filmName = prompt("Назовите один из просмотренных фильмов?", "Семь");
        filmMark = +prompt("Его оценка?", "7");
    }

    personaMovieDB.movies[`${filmName}`] = filmMark;
}

const filmCount = personaMovieDB.count;

if (filmCount < 10) {
    alert(`Просмотренно мало фильмов всего ${filmCount} фильмов`);
} else if (filmCount < 30) {
    alert(`Вы обычный зритель, посмотрели уже ${filmCount} фильмов`);
} else if (filmCount >= 30) {
    alert(`Вы насмотренный зритель, посмотрели аж ${filmCount} фильмов`);
} else {
    alert('Ошибка');
}


console.log(personaMovieDB);