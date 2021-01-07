# heroku-pinger

If you need to keep a free-tier heroku app alive, run this express server to keep those dynos running. 🦖

### Running the Server

Make sure you configure the environment with these environment variables:

- `HEROKU_URL`: a public url of your app that can handle a get-request
- `CRON_SCHEDULE`: a cron schedule in the standard `cronTime` format (ex. `5 0 * 8 *`). If you don't know how to write these, check out [this website.](https://crontab.guru/#5_0_*_8_*)

Once the above are all configured, just run the following command:

- `npm start`

All done!
