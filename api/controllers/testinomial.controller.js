const mongoose = require("mongoose");
const Testinomial = require("../models/testimonial.model");


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
        const testinomial = new Testinomial({
          _id: new mongoose.Types.ObjectId(),
          title: body.title,
          description: body.description,
          url:body.title,
          authorname: body.authorname,
        });
        const testinomialsave = await testinomial.save();
        req.flash("success", "Testinomial saved successsfully");
        res.json("/admin");
      } catch (e) {
        res.json({
          title: "Testinomial",
          err: e.message,
          msg: ""
        });
      }
    }
  };

  exports.allTestimonials = async (req, res, next) => {
    var sess = req.session;
    if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
      res.render("admin/all-testimonials", {
        title: "All Testimonials",
        error: "",
        message: "",
        user: sess.user
      });
    } else {
      req.flash("error", "Session expired");
      res.redirect("/login");
    }
  };
  
  exports.allTestimonials= async (req, res) => {
    var sess = req.session;
    if (
      Object.prototype.hasOwnProperty.call(sess, "islogin") &&
      sess.islogin == true
    ) {
      var allTestinomial = await Testinomial.find();
      res.render("admin/all-testimonials", {
        sess: sess,
        allTestinomial: allTestinomial,
        msg: req.flash("msg"),
        err: req.flash("err")
      });
    } else {
      res.render("admin/login", {
        msg: req.flash("msg"),
        err: req.flash("err")
      });
    }
  };
  
  exports.addTestinomial= async(req,res,next)=>{
    var sess = req.session;
    if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
      res.render("admin/add-testinomial", {
        title: "Add Testimonials",
        error: "",
        message: "",
        user: sess.user
      });
    } else {
      req.flash("error", "Session expired");
      res.redirect("/login");
    }
  };
  