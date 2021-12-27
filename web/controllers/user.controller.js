const { categories, countries, getPosts } = require("../helpers/utlity");
const request = require("request");
const baseurl = "http://localhost:" + process.env.PORT + "/api/";


exports.dashboard = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    const post_data = await getPosts(sess.user._id);
    res.render("user/dashboard", {
      title: "Dashboard",
      error: "",
      message: "",
      posts: post_data.posts,
      user: sess.user
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/login");
  }
};


exports.allPost = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("user/all-posts", {
      title: "All Post",
      error: "",
      message: "",
      user: sess.user
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/login");
  }
};

exports.postAdd = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("user/add-post", {
      title: "Add Post",
      error: "",
      message: "",
      user: sess.user
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/login");
  }
};

exports.profile = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("user/profile", {
      title: "Profile",
      error: "",
      message: "",
      user: sess.user
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/login");
  }
};
exports.profileSetting = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("user/profile-setting", {
      title: "Profile Settings",
      error: "",
      message: "",
      user: sess.user
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/login");
  }
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
        mobile:body.mobile,
        usertype:body.usertype,
        password: hasedpass,
        accept_terms: body.agree
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
  res.redirect("/");
};
