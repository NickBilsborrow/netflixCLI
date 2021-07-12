const fs = require("fs");
const { add, remove, read, update } = require("./apps.js");



let movieList;

try {
  let tempJson = fs.readFileSync("./netflix.json");
  let tempNetflix = JSON.parse(tempJson);
  movieList = tempNetflix;
} catch (error) {
  movieList = [];
}

const app =()=>{
    if(process.argv[2] === "add"){
        add(movieList,process.argv[3])
    } else if(process.argv[2] === "remove"){
        remove(movieList,process.argv[3])
    }else if(process.argv[2] === "update"){
        update(movieList,process.argv[3],process.argv[4])
    }else if(process.argv[2] === "read"){
        read(movieList)
    }
    
}

app()









