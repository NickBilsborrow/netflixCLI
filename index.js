const fs = require("fs");
let movieList;

try {
  let tempJson = fs.readFileSync("./netflix.json");
  let tempNetflix = JSON.parse(tempJson);
  movieList = tempNetflix;
} catch (error) {
  movieList = [];
}

const add = () => {
  if (process.argv[2] === "add") {
    const result = movieList.find(({ movie }) => movie === process.argv[3]);
    console.log(result);
    let index = movieList.findIndex((element) => element === result);
    if (index === -1) {
      tempMovie = { movie: process.argv[3] };
      movieList.push(tempMovie);
      console.log(movieList);
      let stringMovieList = JSON.stringify(movieList);

      fs.writeFileSync("./netflix.json", stringMovieList);
    } else {
      console.log("This movie is already of the list");
    }
  }
};
const remove = () => {
  if (process.argv[2] === "remove") {
    tempMovie = { movie: process.argv[3] };
    console.log(tempMovie);
    const result = movieList.find(({ movie }) => movie === process.argv[3]);
    console.log(result);
    let index = movieList.findIndex((element) => element === result);
    console.log(index);
    if (index !== -1) {
      movieList.splice(index, 1);
      let stringMovieList = JSON.stringify(movieList);
      console.log(movieList);
      fs.writeFileSync("./netflix.json", stringMovieList);
    } else {
      console.log("This movie is not on the list it can't be removed");
    }
  }
};

const read = () => {
  if (process.argv[2] === "read") {
    movieList.map((item) => {
      console.log(item.movie);
    });
  }
};

const update = () => {
  if (process.argv[2] === "update") {
    tempMovie = { movie: process.argv[4] };
    console.log(tempMovie);
    const result = movieList.find(({ movie }) => movie === process.argv[3]);
    console.log(result);
    let index = movieList.findIndex((element) => element === result);
    console.log(index);
    if (index !== -1) {
      movieList.splice(index, 1, tempMovie);
      let stringMovieList = JSON.stringify(movieList);
      console.log(movieList);
      fs.writeFileSync("./netflix.json", stringMovieList);
    } else {
      console.log(movieList);
    }
  }
};

update();

read();

remove();

add();
