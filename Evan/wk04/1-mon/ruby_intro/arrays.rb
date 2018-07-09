# days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
#
# days_of_the_week.unshift(days_of_the_week.pop)
#
# puts days_of_the_week

days_of_the_week = [
  ["monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday"
  ],
  [
    "saturday",
    "sunday"
  ]
]

# remove the weekend days
days_of_the_week = days_of_the_week.unshift

# sort the weekdays alphabetically
puts days_of_the_week[0].sort!
