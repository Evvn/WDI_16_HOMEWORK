class Animal

    def initialize(name = 'unnamed', age = 0, gender = 'non-binary', species = 'unknown', toys = [])
      @name = name
      @age = age
      @gender = gender
      @species = species
      @toys = toys
    end

    def name
      return @name
    end

    def info
      return "Name: #{ @name }\nAge: #{ @age }\nSpecies: #{ @species }\nToys: #{ @toys.join ", " }"
    end

end
