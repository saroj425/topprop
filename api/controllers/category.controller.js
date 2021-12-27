const Category = require("../models/category.model");
const mongoose = require("mongoose");

exports.getCategories = async (req, res, next) => {
  try {
    const dbCats = await Category.find();
    res.status(200).json({ ...dbCats });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

exports.saveCategory = async (req, res, next) => {
  req.check("categoryname", "Category name required").notEmpty();
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
      const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        c_name: req.body.categoryname
      });
      const savedCat = await category.save();
      res.status(201).json({ ...savedCat._doc });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
};
