const mongoose = require("mongoose");
const blog = require("../models/news-article.model");


exports.save_testimonial = async (req, res, next) => {
    req.check("title", "Title required").notEmpty();
    req.check("description", "Description required").notEmpty();
    req.check("authorname", "Author Name required").notEmpty();
    // req.check("url", "Please enter url for test").notEmpty();
    var errors = req.validationErrors();
    if (errors) {
      var response = { errors: [] };
      errors.forEach(function(err) {
        response.errors.push(err.msg);
      });
      res.statusCode = 400;
      res.json({
        title: "Testinomial",
        err: response,
        msg: ""
      });
    } else {
      try {
        const body = req.body;
        const testimonialTitle = await Testinomial.find({ title: body.title });
        if (testimonialTitle.length > 0) {
          return res.json({
            title: "Testinomial",
            err: "Title is Present, please choose another",
            msg: ""
          });
        }
        const blogPost = new Blog({
          _id: new mongoose.Types.ObjectId(),
          title: body.title,
          description: body.description,
          url:body.title,
          authorname: body.authorname,
        });
        const blogPostSave = await blogPost.save();
        req.flash("success", "Post saved successsfully");
        res.json("/admin");
      } catch (e) {
        res.json({
          title: "Blog Post",
          err: e.message,
          msg: ""
        });
      }
    }
  };