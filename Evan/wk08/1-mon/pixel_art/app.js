console.log('Pixel');

var currentColor = $('.current_color')
var colorForm = $('.set_color')
var colorInput = $('.color_input')
var square = $('.square')
var movieForm = $('.set_movie')
var movieInput = $('.movie_input')
var body = $('body')

function setColor() {
  event.preventDefault()
  currentColor.css('backgroundColor', colorInput.val())
}

function setPoster() {
  event.preventDefault()


  body.css('backgroundColor')
}

function setPoster(response) {
  console.log(response.Search[0].Poster);
  body.css('background-image', `url(${ response.Search[0].Poster })`)
}

function searchMovie() {
  event.preventDefault();

  $.ajax({
    method: 'GET',
    url: `https://omdbapi.com/?s=${ movieInput.val() }&apikey=8026d01b`,
    database: 'json'
  }).done(setPoster)
}

movieForm.on('submit', searchMovie)

colorForm.on('submit', setColor)
square.on('mouseover', function(event) {
  $(event.target).css('backgroundColor', currentColor.css('backgroundColor'))
})
