class Client

  def initialize(name = 'unknown', children = 0, age = 0, pets = [])
    @name = name
    @children = children
    @age = age
    @pets = pets
    @clients_pets = []
    return self
  end

  def name
    return @name
  end

  def pets
    return @pets
  end

  def pet_names
    @pets.each do |p|
      @clients_pets.push p.name
    end
    return @clients_pets.uniq
  end

  def info
    @pets.each do |p|
      @clients_pets.push p.name
    end

    return "\nName: #{ @name }\nAge: #{ @age }\nChildren: #{ @children }\nPets: #{ @clients_pets.join ', ' }"
  end

  def pet_info(p)
    pet_id = @clients_pets.index p
    return @pet_info = @pets[pet_id].info
  end

end
