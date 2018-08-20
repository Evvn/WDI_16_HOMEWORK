const express = require('express')
const nodemon = require('nodemon');
const logger = require('./logger');
const _ = require('lodash')

const app = express()
const PORT = 1313


// templates
app.set('view engine', 'ejs')

//    ||
//   ||
//  \/

// logger
app.use(logger)

//    ||
//   ||
//  \/

// static files (css)
app.use(express.static('public'))
//    ||
//   ||
//  \/

// index / home page
app.get('/', (req, res) => {
  const bgc = '#'+Math.random().toString(16).substr(-6);

  compliments = [
    "Nice",
    "Cool",
    "Sweet",
    "Awesome",
    "Neat",
    "Super",
    "Wow",
    "Great",
    "Choice",
    "Ace",
    "Excellent",
    "Lovely",
    "Fine",
    "Okay",
    "Swell",
    "Decent",
    "Fair",
    "Respectable",
    "Delightful",
    "Peachy",
    "Spiffy",
    "Pleasant"
  ]

  compliment = _.sample(compliments)

  res.render('index', {bgc, compliment})
})

//    ||
//   ||
//  \/

// 404

app.listen(1313, () => console.log(`Compliments // port ${PORT} ...`))
