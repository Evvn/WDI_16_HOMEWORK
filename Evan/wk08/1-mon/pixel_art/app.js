console.log('Pixel');

var currentColor = $('.current_color')
var colorForm = $('.set_color')
var colorInput = $('.color_input')
var square = $('.square')

function setColor() {
  event.preventDefault()
  currentColor.css('backgroundColor', colorInput.val())
}

colorForm.on('submit', setColor)
square.on('mouseover', function(event) {
  $(event.target).css('backgroundColor', currentColor.css('backgroundColor'))
})
