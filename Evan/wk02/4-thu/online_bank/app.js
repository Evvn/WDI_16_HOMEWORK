console.log('breaking_the_bank');

var savingsBalance = document.querySelector('.savings-balance')
var checkingBalance = document.querySelector('.checking-balance')

var savingsInput = document.querySelector('.savings-input')
var savingsWithdraw = document.querySelector('.savings-withdraw')
var savingsDeposit = document.querySelector('.savings-deposit')

var checkingInput = document.querySelector('.checking-input')
var checkingWithdraw = document.querySelector('.checking-withdraw')
var checkingDeposit = document.querySelector('.checking-deposit')

function checkBalance() {
  if (Number(savingsBalance.textContent) === 0) {
    console.log('savings in the red');
    document.querySelector('.savings-color').style.background = 'radial-gradient(rgba(255,91,219,1), rgba(255,91,219,0))'
  } else {
    console.log('savings in the green');
    document.querySelector('.savings-color').style.background = 'radial-gradient(rgba(0,255,163,1), rgba(0,255,163,0))'
  }
  if (Number(checkingBalance.textContent) === 0) {
    console.log('checking in the red');
    document.querySelector('.checking-color').style.background = 'radial-gradient(rgba(255,91,219,1), rgba(255,91,219,0))'
  } else {
    console.log('checking in the green');
    document.querySelector('.checking-color').style.background = 'radial-gradient(rgba(0,255,163,1), rgba(0,255,163,0))'
  }
}

function withdrawSavings() {
  if ((Number(savingsBalance.textContent) - Number(savingsInput.value)).toFixed(2) >= 0) {
    return savingsBalance.textContent = (Number(savingsBalance.textContent) - Number(savingsInput.value)).toFixed(2)
  }
}

function depositSavings() {
  return savingsBalance.textContent = (Number(savingsBalance.textContent) + Number(savingsInput.value)).toFixed(2)
}

function withdrawChecking() {
  if ((Number(checkingBalance.textContent) - Number(checkingInput.value)).toFixed(2) >= 0) {
    return checkingBalance.textContent = (Number(checkingBalance.textContent) - Number(checkingInput.value)).toFixed(2)
  }
}

function depositChecking() {
  return checkingBalance.textContent = (Number(checkingBalance.textContent) + Number(checkingInput.value)).toFixed(2)
}

checkBalance();
savingsWithdraw.addEventListener('click', function() {
  withdrawSavings()
  checkBalance()
})
savingsDeposit.addEventListener('click', function() {
  depositSavings()
  checkBalance()
})
checkingWithdraw.addEventListener('click', function() {
  withdrawChecking()
  checkBalance()
})
checkingDeposit.addEventListener('click', function() {
  depositChecking()
  checkBalance()
})
// function sumOfNumbers() {
//   var num1Input = document.querySelector('.num1-input').value
//   var num2Input = document.querySelector('.num2-input').value
//   return document.querySelector('.result-div').textContent = Number(num1Input) + Number(num2Input)
// }
