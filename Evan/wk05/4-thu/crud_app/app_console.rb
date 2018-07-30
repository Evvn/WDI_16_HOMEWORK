# app_console is just a pry session with your data models loaded

require "pry"
require_relative "db_config"
require_relative "models/item"
require_relative "models/comment"

binding.pry
