/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function addFilm() {
    while (confirm('Добавить фильм?')) {
        const watchedMovie = prompt('Один из последних просмотренных фильмов?', '');
        if (watchedMovie) {
            if (watchedMovie.length == 0 || watchedMovie.length > 50) {
                continue;
            }
        } else {
            continue;
        }
        const watchedMovieRating = prompt('На сколько оцените его?', '');
        personalMovieDB.movies[watchedMovie] = watchedMovieRating;
    }
}

addFilm();

function detectMovieLevel() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectMovieLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
       personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}
writeYourGenres();

function showMyDB(){
    if (!personalMovieDB.privat) console.log(personalMovieDB);
}
showMyDB();