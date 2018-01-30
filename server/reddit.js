const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

let dataPath = path.join(__dirname, "../popular-articles.json");
let mediaDataPath = path.join(__dirname, "../popular-downloads.json");

let requestObject = {
  method: "GET",
  uri: "https://reddit.com/r/popular.json"
};

rp(requestObject).then(res => {
  res = JSON.parse(res);
  let posts = res.data.children;
  let formattedPosts = posts.map(post => {
    return {
      title: post.data.title,
      url: post.data.url,
      author: post.data.author,
      media: post.data.media
    };
  });
  let mediaPosts = formattedPosts.filter(post => post.media);
  console.log(mediaPosts);
  fs.writeFile(dataPath, JSON.stringify(formattedPosts), err => {
    console.log("write data error", err);
  });
  fs.writeFile(mediaDataPath, JSON.stringify(mediaPosts), err => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  });
});
