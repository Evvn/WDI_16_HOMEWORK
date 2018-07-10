# A R R A Y S

planeteers = [
  'Earth',
  'Wind',
  'Captain Planet',
  'Fire',
  'Water'
]

# Access the second value in planeteers.
puts planeteers[1]

# Add "Heart" to the end of planeteers.
planeteers.push 'Heart'

# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
rangers = [
  'Red',
  'Blue',
  'Pink',
  'Yellow',
  'Black'
]

heroes = planeteers + rangers

# Alphabetize the contents of heroes using a method.
p heroes.sort

# Randomize the contents of heroes using a method.
p heroes.shuffle

# Bonus
# Select a random element from heroes using a method.
puts heroes.sample

# Select all elements in heroes that begin with "B" using a method.
def starting_with(array, letter)
  p array.select { |string| string.start_with?(letter) }
end

starting_with(heroes, 'B')

# H A S H E S

# Initialize a hash called ninja_turtle with the properties name, weapon and radical. They should have values of "Michelangelo", "Nunchuks" and true respectively.
ninja_turtle = {
  name: 'Michelangelo',
  weapon: 'Nunchucks',
  radical: true
}

# Add a key age to ninja_turtle. Set it to whatever numerical value you'd like.
ninja_turtle[:age] = 15
puts ninja_turtle

# Remove the radical key-value pair from ninja_turtle.
ninja_turtle.delete :radical
puts ninja_turtle

# Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"]).
ninja_turtle[:pizza] = [
  'cheese',
  'pepperoni',
  'peppers'
]
puts ninja_turtle

# Access the first element of pizza_toppings.
puts ninja_turtle[:pizza][0]

# Produce an array containing all of ninja_turtle's keys using a method.
def array_of_keys(hash)
  keys = hash.keys
end
p array_of_keys(ninja_turtle)

# Bonus
# Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method.
def print_hash(hash)
  hash.each do |key, value|
    puts "#{key} is equal to #{value}"
  end
end
print_hash(ninja_turtle)
# ^note, still prints last 'pizza' value as an array
