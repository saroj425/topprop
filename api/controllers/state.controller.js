const State = require("../models/state.model");
const mongoose = require("mongoose");

exports.getStates = async (req, res, next) => {
  try {
    const dbState = await State.find();
    res.status(200).json({ ...dbState });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

exports.getState = async (req, res, next) => {
  try {
    const dbState = await State.find({ countryid: req.params.id });
    let data = [...dbState];
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

exports.saveState = async (req, res, next) => {
  req.check("statename", "State name required").notEmpty();
  req.check("countryid", "Country Id  required").notEmpty();
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
      const state = new State({
        _id: new mongoose.Types.ObjectId(),
        state_name: req.body.statename,
        countryid: req.body.countryid
      });
      const saveDbstate = await state.save();
      res.status(201).json({ ...saveDbstate._doc });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
};
