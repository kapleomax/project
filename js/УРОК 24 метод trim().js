'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt ("Один из последних просмотренных фильмов?", "").trim(),
              b = prompt ("На сколько оцените его?", "");

            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done!');
            } else {
                    console.log('Error!');
                    i--;
                }
            }
}

rememberMyFilms();

console.log(personalMovieDB);