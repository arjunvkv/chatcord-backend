const moment = require("moment");

function formatMessage(username, text) {
  console.log("ho");
  return {
    username,
    text,
    time: moment().format("h:mm a"),
  };
}

module.exports = formatMessage;
