# CLI program

# use require to make libraries available to use
require 'fileutils'

# now can use methods e.g. Fileutils.touch('slackers.txt')

# read file in same directory (or path) to work out how many lines
# File.readlines('filename.rb').size (also IO.readlines('intro.rb').length)

# p instead of puts to show unformatted output eg. [1, 2] instead of 1 br 2

# read filename

puts IO.readlines( ARGV[0] ).length

# print in terminal
