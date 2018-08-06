console.log('Infinite Giphy');

// nb9Orz3Tto7qRYJxrV3yVNGxY7JuBQnx
var search_form = $('.search_form')
var search_inp = $('.search_inp')
var gifs = $('.gifs')
var offset = 0

function onSuccess(response) {
  offset = offset + 10
  for (var i = 0; i < response.data.length; i++) {
    var gif = $('<img>')
    gif.attr('src', response.data[i].images.downsized.url)
    gifs.append(gif)
  }
}

function searchGifs() {
  event.preventDefault()

  search_term = search_inp.val()
  search_term = search_term.replace(' ', '+')

  $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=` + search_term +  `&api_key=nb9Orz3Tto7qRYJxrV3yVNGxY7JuBQnx&limit=10&offset=` + offset,
    database: 'json'

    // on success ->
    // json response is passed to the function as an argument
  }).done(onSuccess)
}

function newSearch() {
  event.preventDefault()
  offset = 0
  gifs.html('')

  search_term = search_inp.val()
  search_term = search_term.replace(' ', '+')

  $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=` + search_term +  `&api_key=nb9Orz3Tto7qRYJxrV3yVNGxY7JuBQnx&limit=10&offset=` + offset,
    database: 'json'

    // on success ->
    // json response is passed to the function as an argument
  }).done(onSuccess)
}

search_form.on('submit', newSearch)

// function to load more when user scrolls to the bottom of page
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
     searchGifs()
   }
});
