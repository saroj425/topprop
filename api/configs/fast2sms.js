var unirest = require("unirest");

var req = unirest("GET", "https://www.fast2sms.com/dev/bulkV2");

req.query({
  "authorization": "YOUR_API_KEY",
  "variables_values": "5599",
  "route": "otp",
  "numbers": "9999999999,8888888888,7777777777"
});

req.headers({
  "cache-control": "no-cache"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});