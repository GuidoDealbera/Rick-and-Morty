const express = require("express");
const server = express();
const router = require("./routes/index");
const cors = require("cors");
const favsRouter = require("./routes/favsRouter");
const { sequelize } = require("./DB_connection");
const { saveApiData } = require("./controllers/saveApiData");
const morgan = require("morgan");

server.use(express.json());
server.use(cors());
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);
server.use(morgan("dev"));
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

server.listen(3001, () => {
  console.log("listening on port 3001");
  sequelize.sync({ force: true });
  saveApiData();
});

module.exports = server;
