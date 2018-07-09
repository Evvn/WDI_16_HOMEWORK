

def convert_temp(temp, unit)
  if unit == 'C'
    puts temp.to_s + 'C'
    puts (temp*(9/5.0)+32).to_s + 'F'
    puts (temp+273.15).to_s + 'K'
  elsif unit == 'F'
    puts ((temp-32)*(5/9.0)).to_s + 'C'
    puts temp.to_s + 'F'
    puts ((temp+459.67)*(5/9.0)).to_s + 'K'
  elsif unit == 'K'
    puts (temp-273.15).to_s + 'C'
    puts (temp*(9/5.0)-459.67).to_s + 'F'
    puts temp.to_s + 'K'
  else
    puts 'Not a valid temperature unit. (F, C, K)'
  end
end

loop do
  # get temperature value from user
  puts 'Enter a temperature'
  temp_value = gets.chomp
  break if temp_value == 'exit'
  # get temperature unit from user
  puts 'Enter a unit'
  temp_unit = gets.chomp
  break if temp_unit == 'exit'
  convert_temp(temp_value.to_i, temp_unit)
end
