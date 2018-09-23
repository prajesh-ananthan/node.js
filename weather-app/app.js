/**
 * Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
 */

const request = require("request");
const yargs = require("yargs");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

console.log(argv);

request(
  {
    url:
      "http://www.mapquestapi.com/geocoding/v1/address?key=zVyU4Ec3O2QQB4QGGnxXqgQEocHVlGnX&location=20,%20Jalan%20RJ%201/1,%20Taman%20Rasah%20Jaya,%20Seremban,%20Negeri%20Sembilan",
    json: true
  },
  (error, response, body) => {
    // Pretty Print JSON response
    console.log(JSON.stringify(body, undefined, 2));

    let state = body.results[0].locations[0].adminArea3;
    console.log(`State: ${state}`);

    let lat = body.results[0].locations[0].latLng.lat;
    let lng = body.results[0].locations[0].latLng.lng;
    console.log(`Latitude: ${lat} , Longitude: ${lng}`);
  }
);
