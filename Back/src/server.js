// const characters = require("./utils/data");
// const PORT = 3001;
// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (req.url.includes("rickandmorty/character")) {
//       const id = req.url.split("/").pop();
//       const character = characters.filter((char) => char.id === Number(id));
//       res
//         .writeHead(200, { "Content-Type": "application/json" })
//         .end(JSON.stringify(character[0]));
//     }
//   })
//   .listen(PORT, "localhost");
const http = require("http");
const PORT = 3001;
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("onsearch")) {
      //console.log(req.url.split('/'))
      const id = req.url.split("/").pop();
      getCharById(res, id);
    }

    if (req.url.includes("detail")) {
      const id = req.url.split("/").pop();
      getCharDetail(res, id);
    }
  })
  .listen(PORT, "localhost");
