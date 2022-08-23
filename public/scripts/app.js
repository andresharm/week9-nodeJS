//console.log('hello from script')

const movieTitle = document.querySelector('.movie-title');
const releaseDate = document.querySelector('.release-date');
const movieGenre = document.querySelector('.genres');
const movieDuration = document.querySelector('.movie-duration');
const moviePoster = document.querySelector('.movie-poster-container img');
const movieQuote = document.querySelector('.movie-info-quote');
const movieOverview = document.querySelector('.movie-info-overview');

window.onload = () => {
    let url = 'https://api.themoviedb.org/3/movie/157336?api_key=48defd77feb2d63da61c61819dda184d';

    fetch(url) // asünkroone päring serverile
    .then(response => {
        return response.json();
    })
    .then(data => {
        //console.log(data);
        movieTitle.textContent = data.title;
        let date = new Date(data.release_date);
        releaseDate.textContent = `${date.getFullYear()} ${data.production_countries [0].name}`;  //$ = funktsiooni sees kasutan muutuja väärtust
        movieDuration.textContent = `${data.runtime} minutes`;
        movieQuote.textContent = data.tagline;
        movieOverview.textContent = data.overview;
        let posterUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.poster_path}`;
        moviePoster.src = posterUrl;
        moviePoster.alt = `${data.title} poster`;
        let genresToDisplay ='';
        data.genres.forEach(genre => {
            genresToDisplay = genresToDisplay + `${genre.name} `;
        });
        
        let genresUpdated = genresToDisplay.slice(0, -1) + '.';
        //console.log(genresUpdated);
        movieGenre.textContent = genresUpdated;
    })
}
