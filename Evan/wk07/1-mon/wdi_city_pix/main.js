var cityList = [
  'NYC',
  'SF',
  'LA',
  'SYD',
  'ATX'
]

var citySelect = document.querySelector('#city-type')

for (var i = 0; i < cityList.length; i++) {
  var option = document.createElement('option')
  var city = document.createTextNode(cityList[i])
  option.appendChild(city)

  citySelect.appendChild(option)
}

var body = document.querySelector('body')

citySelect.addEventListener('change', function() {
  if (citySelect.options.selectedIndex == 0) {
    body.className = ''
  } else if (event.target.value == 'NYC') {
    body.className = 'nyc'
  } else if (event.target.value == 'SF') {
    body.className = 'sf'
  } else if (event.target.value == 'LA') {
    body.className = 'la'
  } else if (event.target.value == 'SYD') {
    body.className = 'sydney'
  } else if (event.target.value== 'ATX') {
    body.className = 'austin'
  }
})
