# Round 1
# Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string.

words = [
  'hello',
  'what',
  'is',
  'up',
  'dude'
]
def lengths(words)
  string_lengths = []
  words.each do |string|
    string_lengths.push string.length
  end
  p string_lengths
end
lengths(words)

# Round 2
# Write a Ruby function called transmogrifier. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
# The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
# For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

# Use your function to find the following answers.
#transmogrifier(5, 4, 3)
#transmogrifier(13, 12, 5)
#transmogrifier(42, 13, 7)

def transmogrifier(n1, n2, n3)
  result = (n1 * n2) ** n3
  return puts result
end
transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

# Round 3
# Write a function called toonify that takes two parameters, accent and sentence.

# If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
# If the accent is "elmer", replace all "r" with "w".
# Feel free to add your own accents as well!
# If the accent is not recognized, just return the sentence as-is.

def toonify(accent, sentence)
  if accent == 'daffy'
    p sentence.gsub 's', 'th'
  end
  if accent == 'elmer'
    p sentence.tr 'r', 'w'
  end
end
toonify('daffy', 'so you smell like sausage')
toonify('elmer', 'I really like rock and roll')

# Round 4
# Write a function word_reverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

def word_reverse(string)
  words = string.split(' ').reverse
  return p words.join ' '
end
word_reverse('Now I know what a TV dinner feels like')

# Round 5
# Write a function letter_reverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.

def letter_reverse(string)
  reversed = []
  string.split(' ').each do |word|
     reversed.push word.reverse
  end
  return p reversed.join ' '
end
letter_reverse('Now I know what a TV dinner feels like')
letter_reverse('Put Hans back on the line')

# Round 6
# Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return either.

def longest(array)
  longest = array.sort_by!(&:length).reverse!
  return p longest[0]
end

longest(["oh", "good", "grief"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
