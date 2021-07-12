const fs = require("fs");

exports.add = (movieList, imput1) => {
  const result = movieList.find(({ movie }) => movie === imput1);
  let index = movieList.findIndex((element) => element === result);
  if (index === -1) {
    tempMovie = { movie: imput1 };
    movieList.push(tempMovie);
    let stringMovieList = JSON.stringify(movieList);
    console.log(`${imput1} has been added to the list`);
    fs.writeFileSync("./netflix.json", stringMovieList);
  } else {
    console.log("This movie is already of the list");
  }
};

exports.remove = (movieList, imput1) => {
  tempMovie = { movie: imput1 };
  const result = movieList.find(({ movie }) => movie === imput1);
  let index = movieList.findIndex((element) => element === result);
  if (index !== -1) {
    movieList.splice(index, 1);
    let stringMovieList = JSON.stringify(movieList);
    console.log(`${imput1} has been removed from the list`);
    fs.writeFileSync("./netflix.json", stringMovieList);
  } else {
    console.log("This movie is not on the list it can't be removed");
  }
};

exports.read = (movieList) => {
  console.log("The movie list consists of:");
  movieList.map((item) => {
    console.log(item.movie);
  });
};

exports.update = (movieList, imput1, input2) => {
  const result1 = movieList.find(({ movie }) => movie === input2);
  let index1 = movieList.findIndex((element) => element === result1);
  if (index1 === -1) {
    tempMovie = { movie: input2 };
    const result2 = movieList.find(({ movie }) => movie === imput1);
    let index2 = movieList.findIndex((element) => element === result2);
    if (index2 !== -1) {
      movieList.splice(index2, 1, tempMovie);
      let stringMovieList = JSON.stringify(movieList);
      console.log(`${imput1} has been changed to ${input2} `);
      fs.writeFileSync("./netflix.json", stringMovieList);
    } else {
      console.log(`${imput1} is not in the list, it can't be updated.`);
    }
  } else {
    console.log(
      `${input2} is already in the list you can't change an item to this`
    );
  }
};
