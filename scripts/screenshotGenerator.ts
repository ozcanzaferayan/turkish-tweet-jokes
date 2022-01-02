const fs = require("fs");
const createScreenshot = require("./createScreenshot");

let rawdata = fs.readFileSync("./src/data/tweetIds.json");
let tweetIds = JSON.parse(rawdata);

let config = {
  lang: "tr-TR",
  width: 1000,
  theme: "light",
  padding: 0,
  hideCard: false,
  hideThread: false,
};

(async () => {
  await Promise.all(
    tweetIds.map((tweetId) => {
      console.log("Creating screenshot for tweetId: ", tweetId);
      return createScreenshot({ tweetId, ...config });
    })
  );
  process.exit(0);
})();
