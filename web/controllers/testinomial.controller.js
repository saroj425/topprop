const mongoose = require("mongoose");
const Testinomial = require("../../api/models/testimonial.model");



  
  exports.allTestimonials= async (req, res) => {
    var sess = req.session;
    if (
      Object.prototype.hasOwnProperty.call(sess, "islogin") &&
      sess.islogin == true
    ) {
      var allTestinomial = await Testinomial.find();
      res.render("admin/all-testimonials", {
        admin: sess.admin,
        allTestinomial: allTestinomial,
        title: "Add Testimonials",
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
        admin: sess.admin,
      });
    } else {
      req.flash("error", "Session expired");
      res.redirect("/login");
    }
  };
  