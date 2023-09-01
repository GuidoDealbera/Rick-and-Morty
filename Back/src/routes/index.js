const { Router } = require("express");
const { getCharById } = require("../controllers/getCharById");
const { getCharDetail } = require("../controllers/getCharDetail");
const cors = require("cors");
const router = Router();
const { postFavs } = require("../controllers/postFavs");
const { favorites } = require("../utils/favs");
const { deleteFavs } = require("../controllers/deleteFavs");
const { getFavs } = require("../controllers/getFavs");

router.use(cors());
router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);
router.post("/fav", postFavs);
router.get("/fav", getFavs);
router.delete("/fav/:id", deleteFavs);

module.exports = { router };
