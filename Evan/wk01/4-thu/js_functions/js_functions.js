console.log("Good afternoon :)");

console.log('\nCombine words');
var combineWords = function(word1, word2) {
  //return a new string that is the combination of two parameters
  return word1.concat(word2);
}

var newWord = combineWords('dog', 'go');

console.log(newWord);

console.log('\nCalculate age');
var calculateAge = function(birthYear, currentYear) {
  var age = currentYear - birthYear;
  var ageBeforeBirthday = age - 1;
  return ' is either ' + ageBeforeBirthday + ' or ' + age + '.';
}

console.log('Evan' + calculateAge(1995, 2018));
console.log('Nathalie' + calculateAge(1992, 2018));
console.log('Dad' + calculateAge(1964, 2018));

console.log('\nLengths');
var wordLengths = function(wordsArray) {
  var wordLengths = [];
  for (var i = 0; i < wordsArray.length; i++) {
    wordLengths.push(wordsArray[i].length)
  }
  return wordLengths;
}

var testWords = ['happy', 'bicycle', 'store'];
console.log(wordLengths(testWords));

console.log('\nTransmogrifier');
var transmogrifier = function(num1, num2, num3){
  return Math.pow((num1 * num2), num3);
}

console.log(transmogrifier(1, 2, 3));

console.log('\nWord reverse');
var wordReverse = function(oldWords) {
  var splitWords = oldWords.split(' ');
  splitWords = splitWords.reverse();
  return splitWords.join(' ');
}

console.log(wordReverse('a man a plan a canal panama'));
