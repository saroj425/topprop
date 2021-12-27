const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const { check } = require("express-validator/check");
const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;


exports.getAllUser = async (req, res, next) => {
  try {
    const dbAllUsers = await user.find();
    res.status(200).json([...dbAllUsers]);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

exports.register = async (req, res, next) => {
  req.check("name", "Username required").notEmpty();
  req.check("mobile", "Valid mobile required").notEmpty();
  req.check("email", "Valid email required").isEmail();
  req.check("pass", "Password required").isLength({ min: 5 });
  req.check("cpass", "Confirm password required").notEmpty();
  req.check("usertype", "User type required").notEmpty();
  req.check("agree", "Please accept our Terms & Conditions").notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var response = { errors: [] };
    errors.forEach(function(err) {
      response.errors.push(err.msg);
    });
    res.statusCode = 400;
    res.json({
      title: "Register",
      err: response,
      msg: ""
    });
  } else {
    try {
      const body = req.body;
      const dbusers = await User.find({ email: body.email });
      if (dbusers.length > 0) {
        return res.json({
          title: "Register",
          err: "Email id is taken, please choose another",
          msg: ""
        });
      }
      if (body.pass !== body.cpass) {
        return res.json({
          title: "Register",
          err: "Both password should match",
          msg: ""
        });
      }
      const hasedpass = await bcrypt.hash(body.pass, 10);
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: body.name,
        email: body.email,
        mobile:body.mobile,
        usertype:body.usertype,
        password: hasedpass,
        accept_terms: body.agree
      });
      const savedUser = await user.save();
      req.flash("success", "Registration success, You can login now...");
      res.json("/login");
    } catch (e) {
      res.json({
        title: "Register",
        err: e.message,
        msg: ""
      });
    }
  }
};

exports.login = async (req, res, next) => {
  req.check("email", "Email Required").notEmpty();
  req.check("password", "Password required").notEmpty();
  var errors = req.validationErrors();
  if (errors) {
    var response = { errors: [] };
    errors.forEach(function(err) {
      response.errors.push(err.msg);
    });
    res.statusCode = 400;
    res.json({
      title: "Login",
      err: "",
      msg: response
    });
  } else {
    try {
      const body = req.body;
      const dbuser = await User.find({ email: body.email });
      if (dbuser.length < 1) {
        return res.json({
          title: "login",
          err: "User not exists",
          msg: ""
        });
      }
      const user = { ...dbuser[0]._doc };
      const cmp_pass = await bcrypt.compare(body.password, user.password);
      if (!cmp_pass) {
        return res.json({
          title: "login",
          err: "Password not matched",
          msg: ""
        });
      }
      if (cmp_pass) {
        const token = jwt.sign(
          {
            email: user.email,
            userId: user._id
          },
          jwtKey,
          {
            expiresIn: "12h"
          }
        );
        return res.status(200).json({
          msg: "Auth success",
          token: token,
          user: user
        });
      }
      res.status(200).json({
        msg: "Auth failed",
        err: err
      });
    } catch (e) {
      res.json({
        title: "login",
        err: e.message,
        msg: ""
      });
    }
  }
};


