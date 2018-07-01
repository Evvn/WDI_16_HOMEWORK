console.log('3/4 full, magic batch\n\n');

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var caesarAlphabet = []

function caesarShift(shiftParameter) {
  caesarAlphabet = []
  for (var i = 0; i < alphabet.length; i++) {
    caesarAlphabet.push(alphabet[i])
  }
  for (var i = 0; i < shiftParameter; i++) {
    caesarAlphabet.push(caesarAlphabet.shift())
  }
}

function caesarUnShift(shiftParameter) {
  caesarAlphabet = []
  for (var i = 0; i < alphabet.length; i++) {
    caesarAlphabet.push(alphabet[i])
  }
  for (var i = 0; i < shiftParameter; i++) {
    caesarAlphabet.unshift(caesarAlphabet.pop())
  }
}

function encode() {
  var message = document.querySelector('.message-input').value
  var secretMessage = message.toUpperCase().split('')
  caesarShift(document.querySelector('.shift-number').value)

  for (var i = 0; i < secretMessage.length; i++) {
    if (alphabet.indexOf(secretMessage[i]) != -1) {
      secretMessage[i] = caesarAlphabet[alphabet.indexOf(secretMessage[i])]
    }
  }
  secretMessage = secretMessage.join('')
  document.querySelector('.secretMessage-output').innerHTML = secretMessage.toLowerCase()
}
document.querySelector('.encode').addEventListener('click', encode)

function decode() {
  var message = document.querySelector('.message-input').value
  var secretMessage = message.toUpperCase().split('')
  caesarUnShift(document.querySelector('.shift-number').value)

  for (var i = 0; i < secretMessage.length; i++) {
    if (caesarAlphabet.indexOf(secretMessage[i]) != -1) {
      secretMessage[i] = caesarAlphabet[alphabet.indexOf(secretMessage[i])]
    }
  }
  secretMessage = secretMessage.join('')
  document.querySelector('.secretMessage-output').innerHTML = secretMessage.toLowerCase()
}
document.querySelector('.decode').addEventListener('click', decode)
