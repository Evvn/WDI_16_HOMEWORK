console.log('Pixel');

var currentColor = $('.current_color')
var colorForm = $('.set_color')
var colorInput = $('.color_input')

function setColor() {
  event.preventDefault()
  currentColor.css('backgroundColor', colorInput.val())
}

colorForm.on('submit', setColor)
