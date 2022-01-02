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
      try {
        if (fs.existsSync(`./screenshots/${tweetId}-${config.theme}.png`)) {
          return null;
        } else {
          return createScreenshot({ tweetId, ...config });
        }
      } catch (err) {
        return createScreenshot({ tweetId, ...config });
      }
    })
  );
  process.exit(0);
})();
