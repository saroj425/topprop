const Country = require("../models/country.model");
const mongoose = require("mongoose");

exports.getCountry = async (req, res, next) => {
  try {
    const dbCountry = await Country.find();
    res.status(200).json({ ...dbCountry });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

exports.saveCountry = async (req, res, next) => {
  req.check("countryname", "Country name required").notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var response = { errors: [] };
    errors.forEach(function(err) {
      response.errors.push(err.msg);
    });
    res.statusCode = 400;
    return res.json(response);
  } else {
    try {
      const country = new Country({
        _id: new mongoose.Types.ObjectId(),
        country_name: req.body.countryname
      });
      const savedCntry = await country.save();
      res.status(201).json({ ...savedCntry._doc });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
};
