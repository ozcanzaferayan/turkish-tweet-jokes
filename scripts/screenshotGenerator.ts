const fs = require("fs");
const createScreenshot = require("./createScreenshot");

let rawdata = fs.readFileSync("./src/data/tweetIds.json");
let tweetIds = JSON.parse(rawdata);

let config = {
  lang: "tr-TR",
  width: 1000,
  theme: "light",
  padding: 25,
  hideCard: false,
  hideThread: false,
};

(async () => {
  await Promise.all(
    tweetIds.map((tweetId) => {
      if (!fs.existsSync(`./screenshots/${tweetId}-${config.theme}.png`)) {
        return createScreenshot(tweetId, config);
      } else {
        return null;
      }
    })
  );
  process.exit(0);
})();
