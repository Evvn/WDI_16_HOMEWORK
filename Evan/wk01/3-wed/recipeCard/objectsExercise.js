console.log("The Recipe Card");
var favoriteRecipe = {
  title: "Tiramisu",
  servings: 4,
  ingredients: ["Ladyfingers", "Espresso", "Marsala"]
}

console.log(favoriteRecipe.title);
console.log("Serves: " + favoriteRecipe.servings);

for (var i = 0; i < favoriteRecipe.ingredients.length; i++) {
  console.log(favoriteRecipe.ingredients[i]);
}

console.log("\nThe Reading List");

var readingList = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    alreadyRead: false
  },
  {
    title: "American Gods",
    author: "Niel Gaiman",
    alreadyRead: true
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    alreadyRead: true
  }
]

for (var i = 0; i < readingList.length; i++) {
  if (readingList[i].alreadyRead === true) {
    console.log("You already read " + readingList[i].title + " by " + readingList[i].author);
  }
  else {
    console.log("You haven't read " + readingList[i].title + " by " + readingList[i].author);
  }
}

console.log("\nThe Movie Database");
console.log("Call function by typing showMovies();");

var movieList = [
  {
    title: "Lord of the Rings",
    duration: 208,
    stars: ["Sam", "Frodo", "Gandalf", "Legolas"]
  },
  {
    title: "Avengers: Infinity War",
    duration: 160,
    stars: ["Thor", "The Hulk", "Black Panther", "Captain America"]
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    duration: 159,
    stars: ["Harry", "Ron", "Hermione"]
  }
]

var showMovies = function() {
  for (var i = 0; i < movieList.length; i++) {
      console.log(movieList[i].title + " lasts for " +  movieList[i].duration + " minutes. Stas: " + movieList[i].stars + ".");
  }
}
