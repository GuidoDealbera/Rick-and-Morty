const { Router } = require("express");
const getCharById = require('../controllers/getCharById')
const getCharDetail = require('../controllers/getCharDetail')
const getAllChars = require('../controllers/getAllChars')
const router = Router()

router.get('/onsearch/:id', getCharById)
router.get('/detail/:detailId', getCharDetail)
router.get('/all', getAllChars)

module.exports = router