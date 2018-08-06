console.log('AJAX Movies\n\n');

var search_form = document.querySelector('.search_form')
var search_inp = document.querySelector('#search_inp')
var results_list = document.querySelector('.results_list')

function onSuccess(response) {
  // clears list on each search
  results_list.innerHTML = ''
  const movies = response.Search
  movies.forEach(function(movie) {
    // create nodes to add to results
    // title
    let movieId = movie.imdbID
    var title = document.createElement('h4')
    var titleContent = document.createTextNode(movie.Title)
    title.appendChild(titleContent)
    title.className = movieId + ' movie'
    results_list.appendChild(title)
    var movieElement = document.querySelector('.' + movieId)
    // poster
    movieElement.style.background = 'url(' + movie.Poster + ')'
    movieElement.addEventListener('click', function() {
      window.location.href = 'https://www.imdb.com/title/' + movieId
    })
  })
}

function searchMovie() {
  event.preventDefault();

  $.ajax({
    method: 'GET',
    url: `https://omdbapi.com/?s=${ search_inp.value }&apikey=8026d01b`,
    database: 'json'

    // on success ->
    // response is passed to the function as an argument
  }).done(onSuccess)
}

search_form.addEventListener('submit', searchMovie)
