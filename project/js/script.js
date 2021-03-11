/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Еще по одной",
        "Я- легенда",
    ]
};
movieDB.movies = movieDB.movies.sort();
// Первое задание
const advBlock = document.querySelector('.promo__adv');
let advImg = advBlock.querySelectorAll('img');

advImg.forEach(item => {
    item.remove();
});

// Второе задание

const promoContent = document.querySelector('.promo__content'),
    promoGenreNode = document.createTextNode('Драма');
let promoBg = promoContent.querySelector('.promo__bg');
let promoGenre = promoBg.querySelector('.promo__genre');
promoGenre.textContent = promoGenreNode;

// Третье задание

promoBg.style.background = 'url(./img/bg.jpg) center center/cover no-repeat';

// Четвертое задание

const promoInteractive = promoContent.querySelector('.promo__interactive');
let promoInteractiveList = promoInteractive.querySelector('.promo__interactive-list');

const sortedMovies = movieDB.movies.slice().sort();
console.log(movieDB.movies);
console.log(sortedMovies);

function writeMovies(movieArray) {
    promoInteractiveList.innerHTML = '';
    movieArray.forEach((item, i) => {
        promoInteractiveList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item" data-order="${i}">
        ${++i}. ${item}
        <div class="delete"></div>
    </li>`);
    });
}
writeMovies(sortedMovies);


/* Задания на урок 6:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Урок 2

const addForm = document.querySelector('.add');
let delBtn = document.querySelectorAll('.delete');

// Функция удаления фильма из списка
function deleteMovie(btn) {
    delBtn.forEach((item) => {
        item.addEventListener('click', () => {
            const movie = item.parentElement;
            let movieIndex = +movie.dataset.order;
            movieDB.movies = movieDB.movies.slice(0, movieIndex).concat(movieDB.movies.slice(movieIndex + 1));
            writeMovies(movieDB.movies);
            delBtn = document.querySelectorAll('.delete');
            deleteMovie(delBtn);
        });
    });
}
deleteMovie(delBtn);


// функция добавления фильма в список
function pushNewMovie(movie, favourite) {
    if (favourite) {
        alert('Добавили любимый фильм');
    }
    movieDB.movies.push(movie);
    movieDB.movies = movieDB.movies.sort();
    addForm.reset();
}
addForm.addEventListener('submit', (e) => {
    let newMovie = document.querySelector('.adding__input').value,
        newMovieUpper, favorite, inputs = document.querySelectorAll('input');
    inputs.forEach((item) => {
        if (item.type == 'checkbox') {
            favorite = item.checked;
        }
    });
    e.preventDefault();
    if (newMovie == '') {
        document.querySelector('.adding__input').placeholder = 'Введите фильм';
        alert('Введите фильм');
        let newMovieUpper = newMovie[0].toUpperCase() + newMovie.slice(1);
        movieDB.movies.push(newMovieUpper);
        movieDB.movies = movieDB.movies.sort();
        addForm.reset();
        writeMovies(movieDB.movies);
    } else if (newMovie.length < 21) {
        newMovieUpper = newMovie[0].toUpperCase() + newMovie.slice(1);
        pushNewMovie(newMovieUpper, favorite);
        writeMovies(movieDB.movies);
    } else {
        newMovieUpper = newMovie[0].toUpperCase() + newMovie.slice(1, 21) + '...';
        pushNewMovie(newMovieUpper, favorite);
        writeMovies(movieDB.movies);
    }
    delBtn = document.querySelectorAll('.delete');
    console.log(delBtn);
    deleteMovie(delBtn);
});