const express = require("express");
const routesApp = require("./routes/");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routesApp);
  }
}

module.exports = new App().server;
