console.log('timer test');

function timer() {
  var sec = 100
  var timer = setInterval(function(){
    document.querySelector('.timer').innerHTML = sec
    sec --
    if (sec < 0) {
      clearInterval(timer)
      document.querySelector('.timer').innerHTML = 'game over'
    }
  }, 100)
}

timer()
