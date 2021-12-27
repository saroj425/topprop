const router = require("express").Router();
const CountryController = require("../controllers/country.controller");

router.get("/", CountryController.getCountry);
router.post("/", CountryController.saveCountry);

module.exports = router;
