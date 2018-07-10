# A
a = [
  'Anil',
  'Erik',
  'Jonathan'
]

# How would you return the string "Erik"?
p a[1]

# How would you add your name to the array?
a.push 'Evan'
p a

# B
h = {
  0 => 'Zero',
  1 => 'One',
  2 => 'Two',
  :two => 2
}

# How would you return the string "One"?
p h[1]

# How would you return the string "Two"?
p h[2]

# How would you return the number 2?
p h[:two]

# How would you add {3 => "Three"} to the hash?
h[3] = 'Three'
p h

# How would you add {:four => 4} to the hash?
h[:four] = 4
p h

# C
is = {
  true => 'Is true',
  false => 'Is false'
}

# What is the return value of is[2 + 2 == 4]?
# 'Is true'

# What is the return value of is["Erik" == "Jonathan"]?
# 'Is false'

# What is the return value of is[9 > 10]?
# 'Is false'

# What is the return value of is[0]?
# 'nil'

# What is the return value of is["Erik"]?
# 'nil'

# D
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75, 13],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24, 13],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85, 13],
  }
}

#  How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
p users['Jonathan'][:twitter]

#  How would you add the number 7 to Erik's favorite numbers?
p users['Erik'][:favorite_numbers].push 7

#  How would you add yourself to the users hash?
p users['Evan'] = {
  :twitter => 'Evvn',
  :favorite_numbers => [13, 12, 64, 33]
}

#  How would you return the array of Erik's favorite numbers?
p users['Erik'][:favorite_numbers]

#  How would you return the smallest of Erik's favorite numbers?
p users['Erik'][:favorite_numbers].min

#  How would you return an array of Anil's favorite numbers that are also even?
users['Anil'][:favorite_numbers].each { |num|
  puts num if num.even?
}

#  How would you return an array of the favorite numbers common to all users?
all_favorite_numbers = []
users.each do |key, value|
  all_favorite_numbers.push value[:favorite_numbers]
end
# turns 2d array into 1d array
all_favorite_numbers = all_favorite_numbers.flatten

shared_favorites = all_favorite_numbers.select do |num|
  all_favorite_numbers.count(num) >= users.keys.length
end
shared_favorites = shared_favorites.uniq
p shared_favorites

#  How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
sorted_favorites = all_favorite_numbers
sorted_favorites = sorted_favorites.flatten.sort.uniq
p sorted_favorites
