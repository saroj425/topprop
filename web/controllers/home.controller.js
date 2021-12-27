const request = require("request");
const baseurl = "http://localhost:" + process.env.PORT + "/api/";


exports.homepage = async (req, res, next) => {
  res.render("home/index", {
    title: "Home",
    err: "",
    msg: ""
  });
};

exports.login = async (req, res, next) => {
  res.render("home/signin", {
    title: "Login",
    err: "",
    msg: ""
  });
};

exports.register = async (req, res, next) => {
  res.render("register", {
    title: "Register",
    err: "",
    msg: ""
  });
};

exports.forgotpassword = async (req, res, next) => {
  res.render("forgotpassword", {
    title: "Reset Password",
    err: "",
    msg: ""
  });
};

exports.listings = async (req, res, next) => {
  res.render("listings", {
    title: "Listing",
    err: "",
    msg: ""
  });
};

exports.categories = async (req, res, next) => {
  res.render("categories", {
    title: "Categories",
    err: "",
    msg: ""
  });
};

exports.user_signup = async (req, res, next) => {
  let body = req.body;
  let url = baseurl + "user/signup/";
  request.post(
    {
      headers: {
        "content-type": "application/json"
      },
      url: url,
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        pass: body.pass,
        cpass: body.cpass,
        agree: body.agree
      })
    },
    (error, response, body) => {
      var bodyparse = JSON.parse(body);
      if (error) {        
        res.render("register", {
          title: "signup",
          err: error,
          msg: ""
        });
      } else {
        var bodyparse = JSON.parse(body);        
        if (response.statusCode == 201) {
          req.flash("success", "Registration success, You can login now...");
          res.redirect("/login");
        } else {
          if (bodyparse.hasOwnProperty("err")) {
            console.log("here");
            console.log(error);
            res.render("register", {
              title: "signup",
              err: bodyparse.err,
              msg: ""
            });
          } else {
            req.flash("error", bodyparse.msg);
            res.redirect("/login");
          }
        }
      }
    }
  );
};

exports.user_signin = async (req, res, next) => {
  let body = req.body;
  let url = baseurl + "user/login/";
  request.post(
    {
      headers: { "content-type": "application/json" },
      url: url,
      body: JSON.stringify({
        email: body.email,
        password: body.password
      })
    },
    (error, response, body) => {
      if (error) {
        res.render("login", {
          title: "login",
          err: error,
          msg: ""
        });
      } else {
        var bodyparse = JSON.parse(body);
        var sess = req.session;
        if (bodyparse.hasOwnProperty("token")) {
          if (bodyparse.hasOwnProperty("user")) {
            sess.token = bodyparse.token;
            sess.user = bodyparse.user;
            sess.msg = bodyparse.msg;
            sess.islogin = true;
            res.redirect("/admin/dashboard");
          } else {
            res.render("login", {
              title: "login",
              err: "Your data not found",
              msg: "user data not found"
            });
          }
        } else {
          res.render("login", {
            title: "login",
            err: bodyparse.msg,
            msg: "Token not found"
          });
        }
      }
    }
  );
};





exports.user_logout = async (req, res, next) => {
  req.session.islogin = false;
  req.session.user = "";
  res.redirect("/login");
};




