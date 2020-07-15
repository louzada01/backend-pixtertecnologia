const https = require("https");

class GetFuelStationService {
  execute({ lat = "", lng = "" }) {
    return new Promise((resolve, reject) => {
      https
        .get(
          `https://maps.googleapis.com/maps/api/place/search/json?location=${lat},${lng}&radius=10000&type=gas_station&key=AIzaSyA6TfU84r6wT2gu1NYAOCN7JkO342K21So`,
          (resp) => {
            let data = "";

            resp.on("data", (chunk) => {
              data += chunk;
            });

            resp.on("end", () => {
              resolve(JSON.parse(data));
            });
          }
        )
        .on("error", (err) => {
          reject(`Error ${err.message}`);
        });
    });
  }
}

module.exports = GetFuelStationService;
