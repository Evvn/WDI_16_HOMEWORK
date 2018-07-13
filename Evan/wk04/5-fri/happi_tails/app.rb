require 'pry'
# require other files
require_relative 'animal'
# (name, age, gender, species, [toys])

require_relative 'client'
# (name, children, age, [pets])

# declare a shelter hash to store [animals] and [clients]
shelter = {
  :animals => [],
  :clients => []
}

# build menu of program
def menu(shelter)
  puts "\nPlease select a menu item using a number [1-6, exit]\n\n"
  print "[1] - display all animals || "
  print " display all clients - [2]\n"
  print "[3] - create an animal    || "
  print "     create a client - [4]\n"
  print "[5] - facilitate adoption || "
  print "facilitate surrender - [6]\n\n"
  menu_input shelter, gets.chomp
end

# methods for each menu input
def display_animals(shelter)
  shelter[:animals].each do |animal|
    print "#{ animal.name }, "
  end
  # prompt retrieving animal info
  puts "\n\nSelect a name to retrieve details [name, exit]"
  info_id = gets.chomp
  if info_id == 'exit'
    return menu shelter
  end

  # Add all animal names to an array
  animal_names = []
  shelter[:animals].each do |a|
    animal_names.push a.name
  end

  # Check index number of animal to create ID
  animal_id = animal_names.index info_id

  # Use animal_id to print info of animal from {shelter}
  puts shelter[:animals][animal_id].info

  return menu shelter
end

def display_clients(shelter)
  shelter[:clients].each do |client|
    print "#{ client.name }, "
  end

  # prompt retrieving client info
  puts "\n\nSelect a name to retrieve details [name, exit]"
  info_id = gets.chomp
  if info_id == 'exit'
    return menu shelter
  end

  # Add all client names to an array
  client_names = []
  shelter[:clients].each do |c|
    client_names.push c.name
  end

  # Check index number of client to create ID
  client_id = client_names.index info_id

  # Use client_id to print info of client from {shelter}
  puts shelter[:clients][client_id].info

  # prompt retrieving pet info
  puts "\nSelect a pet name to retrieve details [name, exit]"
  pet_id = gets.chomp
  if pet_id == 'exit'
    return menu shelter
  end

  puts shelter[:clients][client_id].pet_info pet_id

  return menu shelter
end

def create_animal(shelter)
  puts 'Enter new animal details'
  print 'Name: '
  name = gets.chomp
  print 'Age: '
  age = gets.chomp
  print 'Gender: '
  gender = gets.chomp
  print 'Species: '
  species = gets.chomp
  print 'Toys: '
  toys = gets.chomp.split ' '
  shelter[:animals].push Animal.new name, age, gender, species, toys
  puts "#{ name } has been added!"
  puts ""
  return menu shelter
end

def create_client(shelter)
  print 'Name: '
  name = gets.chomp
  print 'Children: '
  children = gets.chomp
  print 'Age: '
  age = gets.chomp
  shelter[:clients].push Client.new name, children, age
  puts "#{ name } has been added!"
  return menu shelter
end

def adoption(shelter)
  puts "\nPlease select a client [name, exit]"
  shelter[:clients].each do |client|
    print "#{ client.name }, "
  end
  print "\n"
  print 'Name: '
  client = gets.chomp
  if client == 'exit'
    return menu shelter
  end

  puts "\nPlease select an animal [name, exit]"
  shelter[:animals].each do |animal|
    print "#{ animal.name }, "
  end
  print "\n"
  print 'Name: '
  animal = gets.chomp
  if animal == 'exit'
    return menu shelter
  end

  # Add all animal names to an array
  animal_names = []
  shelter[:animals].each do |a|
    animal_names.push a.name
  end

  # Check index number of animal to create ID
  animal_id = animal_names.index animal

  # Add all client names to an array
  client_names = []
  shelter[:clients].each do |c|
    client_names.push c.name
  end

  # Check index number of client to create ID
  client_id = client_names.index client

  # Push animal ID in to client info via client ID
  shelter[:clients][client_id].pets.push shelter[:animals][animal_id]

  # Remove animal from shelter hash via animal ID
  shelter[:animals].delete_at animal_id

  print "\n#{ client } adopted #{ animal }!"

  puts ""
  return menu shelter
end

def surrender(shelter)

  puts ""
  return menu shelter
end

# directs program to method via menu input
def menu_input(shelter, input)
  if input == '1'
    # display all animals
    display_animals shelter
  elsif input == '2'
    # display all clients
    display_clients shelter
  elsif input == '3'
    # create an animal
    create_animal shelter
  elsif input == '4'
    # create a client
    create_client shelter
  elsif input == '5'
    # facilitate adoption
    adoption shelter
  elsif input == '6'
    # facilitate surrender
    surrender shelter
  elsif input == 'exit'
    # ends program
    return puts 'Bye!'
  else
    # Re-try menu if input is invalid
    return menu shelter
  end
end

# test animals
shelter[:animals].push Animal.new 'Max', 9, 'male', 'cat', ['soccer ball', 'towel']

shelter[:animals].push Animal.new 'Yuki', 1, 'female', 'cat', ['shopping bag', 'green mouse']

shelter[:animals].push Animal.new 'Colin', 5, 'male', 'cat', ['hedgehog', 'bugs']

# test clients
shelter[:clients].push Client.new 'Paul', 2, 54

shelter[:clients].push Client.new 'Nathalie', 0, 25


# initialize program
menu shelter
