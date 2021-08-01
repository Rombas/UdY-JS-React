/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', 'Введите число');
        }
    },
    addFilm() {
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
            this.movies[watchedMovie] = watchedMovieRating;
        }
    },
    detectMovieLevel() {
        if (this.count >= 0 && this.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            alert('Вы классический зритель');
        } else if (this.count > 30) {
            alert('Вы киноман');
        } else {
            console.log(this.count);
            alert('Произошла ошибка');
        }
    },
    writeYourGenres() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            while (genre == '' || genre == null) {
                genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, 'Введите жанр');
            }
            this.genres[i] = genre;
        }
        this.genres.forEach((el, i) => console.log(`Любимый жанр #${i + 1} - это ${el}`));
    },
    showMyDB() {
        if (!this.privat) console.log(personalMovieDB);
        else console.log('Information is private');
    },
    toggleVisibleMyDB() {
        if (this.privat) this.privat = false;
        else this.privat = true;
    }
};


personalMovieDB.start();
personalMovieDB.addFilm();
personalMovieDB.detectMovieLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
