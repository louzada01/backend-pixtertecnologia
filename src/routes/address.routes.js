const { Router } = require("express");
const GetAddressService = require("../services/GetAddressService");
const GetFuelStationService = require("../services/GetFuelStationService");

const addressRouter = new Router();

addressRouter.post("/", async (req, res) => {
  const { lat, lng } = req.body;
  try {
    const getAddress = new GetAddressService();
    const getFuelStation = new GetFuelStationService();

    const [address, fuelStation] = await Promise.all([
      getAddress.execute({ lat, lng }),
      getFuelStation.execute({ lat, lng }),
    ]);

    const [{ address_components }] = address.results.filter(
      (item) =>
        item.geometry.location.lat == lat || item.geometry.location.lng == lng
    );

    const postos = fuelStation.results.map((station) => {
      return {
        lat: station.geometry.location.lat,
        lng: station.geometry.location.lng,
        nome: station.name,
        endereco: station.vicinity,
      };
    });

    return res.status(200).json({
      lat,
      lng,
      endereco: {
        estado: address_components[4].short_name,
        cidade: address_components[3].short_name,
        bairro: address_components[2].short_name,
        logradouro: address_components[1].long_name,
        numero: address_components[0].short_name,
        cep: address_components[6].short_name,
      },
      postos,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = addressRouter;
