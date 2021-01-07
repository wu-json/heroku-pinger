const axios = require("axios");
const cron = require("cron").CronJob;
const express = require("express");

// make sure these are configured in your environment
const port = process.env.PORT || 5000;
const herokuUrl = process.env.HEROKU_URL;
const cronSchedule = process.env.CRON_SCHED;

const app = express();

const pingHerokuUrl = async () => {
  return axios.get(herokuUrl);
};

const pingCron = new cron({
  cronTime: "* * * * * *",
  onTick: pingHerokuUrl,
  start: false,
  timeZone: "America/New_York",
});

pingCron.start();

app.listen(port, () => console.log("Started express server 🚀"));
