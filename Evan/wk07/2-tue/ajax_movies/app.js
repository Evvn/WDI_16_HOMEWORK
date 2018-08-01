console.log('AJAX Movies\n\n');

var search_btn = document.querySelector('#search_btn')
var search_inp = document.querySelector('#search_inp')
var results_list = document.querySelector('.results_list')

function onSuccess(movie) {
  for (var m = 0; m < movie['Search'].length; m++) {
    // create nodes to add to results
    // title
    let movieId = movie['Search'][m]['imdbID']
    var title = document.createElement('h4')
    var titleContent = document.createTextNode(movie['Search'][m]['Title'])
    title.appendChild(titleContent)
    title.className = movieId + ' movie'
    results_list.appendChild(title)
    var movieElement = document.querySelector('.' + movieId)
    // poster
    movieElement.style.background = 'url(' + movie['Search'][m]['Poster'] + ')'
    movieElement.addEventListener('click', function() {
      window.location.href = 'https://www.imdb.com/title/' + movieId
    })
  }
}

function searchMovie() {
  $.ajax({
    method: 'GET',
    url: 'https://omdbapi.com/?s=' + search_inp.value + '&apikey=8026d01b',
    database: 'json'

    // on success ->
    // response is passed to the function as an argument
  }).done(onSuccess)
}

search_btn.addEventListener('click', searchMovie)
