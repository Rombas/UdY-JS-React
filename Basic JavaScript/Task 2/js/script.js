/* Задания на урок:

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

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelector('.promo__adv').remove();
document.querySelector('.promo__genre').innerHTML = 'драма';
document.querySelector('.promo__bg').style.backgroundImage = 'url("./img/bg.jpg")';

const setMovies = () => {
    const movieList = document.querySelectorAll('.promo__interactive-item');
    movieList.forEach((movie, i) => {
        movie.textContent = `${i + 1}. ${movieDB.movies.sort()[i]}`;
    });
};
setMovies();
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('#checkbox').checked) {
        console.log('"Добавляем любимый фильм');
    }
    let newMovie = document.querySelector('.adding__input').value;
    if (newMovie.length > 10) {
        newMovie = newMovie.slice(0,10) + '...';
    }
    movieDB.movies.push(newMovie);
    const moviesList = document.querySelector('.promo__interactive-list');
    const newNode = document.createElement('li');
    newNode.innerHTML = `<li class="promo__interactive-item">${newMovie}
                            <div class="delete"></div>
                        </li>`;
    moviesList.appendChild(newNode);
    setMovies();
});