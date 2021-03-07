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
    ]
};
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
promoInteractiveList.innerHTML = '';

const sortedMovies = movieDB.movies.sort();
console.log(sortedMovies);
sortedMovies.forEach((item, i) => {
    promoInteractiveList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${++i}. ${item}
        <div class="delete"></div>
    </li>`);
});


// Пятое задание