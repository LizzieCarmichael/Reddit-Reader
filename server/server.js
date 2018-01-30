const path = require("path");
const fs = require("fs");

let chirpsArray = [
  {
    name: "Chirp 1",
    message: "Hello World! 'Tis my first chirp!"
  },
  {
    name: "Chirp 2",
    message: "Chirp Chirp"
  },
  {
    name: "Chirp 3",
    message: "More chirping"
  },
  {
    name: "Chirp 4",
    message: "Are you tired yet of my chirps?"
  },
  {
    name: "Chirp 5",
    message: "Chirp right meow"
  }
];

let chirpsPath = path.join(__dirname, "../chirps.json");
let chirps = JSON.stringify(chirpsArray);

fs.writeFile(chirpsPath, chirps, err => {
  if (err) console.log("writing data error", err);
});

fs.readFile(chirpsPath, { encoding: "UTF-8" }, err => {
  if (err) console.log("reading data error", err);
  chirpsArray.forEach(item => {
    console.log(item.message);
  });
});
