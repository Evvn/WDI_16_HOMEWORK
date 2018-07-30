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
  } else if (citySelect.options.selectedIndex == 1) {
    body.className = 'nyc'
  } else if (citySelect.options.selectedIndex == 2) {
    body.className = 'sf'
  } else if (citySelect.options.selectedIndex == 3) {
    body.className = 'la'
  } else if (citySelect.options.selectedIndex == 4) {
    body.className = 'sydney'
  } else if (citySelect.options.selectedIndex == 5) {
    body.className = 'austin'
  }
})
