function estimateStrength(password) {

  let strength = {
    score: 0,
    hasLowerCase: false,
    hasSpecialChar: false,
    hasUpperCase: false,
    hasNumber: false,
    isOver8Char: false
  }

  // check if contains lowercase
  if (/[a-z]/.test(password)) {
    strength.score += 1
    strength.hasLowerCase = true
  }

  // check if contains uppercase
  if (/[A-Z]/.test(password)) {
    strength.score += 1
    strength.hasUpperCase = true
  }

  // check if length is >8
  if (password.length > 8) {
    strength.score += 1
    strength.isOver8Char = true
  }

  // check if has number
  if (/[0-9]/.test(password)) {
    strength.score += 1
    strength.hasNumber = true
  }

  // check if contains special chars
  if (/\W/.test(password)) {
    strength.score += 1
    strength.hasSpecialChar = true
  }

  return strength
}

module.exports = estimateStrength
