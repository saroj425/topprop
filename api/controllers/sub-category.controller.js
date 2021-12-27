const SubCategory = require("../models/sub.category.model");
const mongoose = require("mongoose");

exports.getSubCategories = async (req, res, next) => {
  try {
    const dbCats = await SubCategory.find();
    res.status(200).json({ ...dbCats });
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
};

exports.getSubCategory = async (req, res, next) => {
  try {
    const dbCats = await SubCategory.find({ category: req.params.id });
    let data = [...dbCats];
    res.status(200).json(data);
  } catch (e) {
    res.status(200).json({ msg: e.message });
  }
};

exports.saveSubCategory = async (req, res, next) => {
  req.check("catid", "Category Id required").notEmpty();
  req.check("subcatname", "Sub Category name required").notEmpty();
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
      const subcategory = new SubCategory({
        _id: new mongoose.Types.ObjectId(),
        subcatname: req.body.subcatname,
        category: req.body.catid
      });
      const savedCat = await subcategory.save();
      res.status(201).json({ ...savedCat._doc });
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  }
};
