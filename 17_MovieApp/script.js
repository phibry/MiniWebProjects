// API Variables
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05426f20ac3529646edb29e6352f8e60&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=05426f20ac3529646edb29e6352f8e60&query="';

// HTML Variables
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Get initial movies
getMovies(API_URL);

// Fetch Data
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

// Fill body with the movies
function showMovies(movies) {
  // Clear everything inside the main body
  main.innerHTML = '';

  movies.forEach((movie) => {
    // Destructure props
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.innerHTML = `

      <img
        src="${IMG_PATH + poster_path}"
        alt="${title}"
      />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${colorSelector(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>

    `;

    main.appendChild(movieEl);
  });
}

function colorSelector(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

// Eventlistener for submitting the searchterm
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
