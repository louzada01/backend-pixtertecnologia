const { Router } = require("express");
const AddressRoutes = require("./address.routes");

const routes = new Router();

routes.get("/", (req, res) => res.status(200).json({ status: "Server is OK" }));
routes.use("/address", AddressRoutes);

module.exports = routes;
