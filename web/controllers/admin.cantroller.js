const request = require("request");
const baseurl = "http://localhost:" + process.env.PORT + "/api/";
const UserModel = require("../../api/models/user.model");





exports.admin_signup = async (req, res, next) => {
  let body = req.body;
  let url = baseurl + "admin/signup/";
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
          res.redirect("admin/login");
        } else {
          if (bodyparse.hasOwnProperty("err")) {
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

exports.admin_signin = async (req, res, next) => {
  let body = req.body;
  let url = baseurl + "admin/login/";
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
        res.render("admin/login", {
          title: "login",
          err: error,
          msg: ""
        });
      } else {
        var bodyparse = JSON.parse(body);
        var sess = req.session;
        if (bodyparse.hasOwnProperty("admintoken")) {
          if (bodyparse.hasOwnProperty("admin")) {
            sess.token = bodyparse.admintoken;
            sess.admin = bodyparse.admin;
            sess.msg = bodyparse.msg;
            sess.islogin = true;
            res.redirect("/admin/dashboard");
          } else {
            res.render("admin/login", {
              title: "login",
              err: "Your data not found",
              msg: "user data not found"
            });
          }
        } else {
          res.render("admin/login", {
            title: "login",
            err: bodyparse.msg,
            msg: "Token not found"
          });
        }
      }
    }
  );
};

exports.admin_logout = async (req, res, next) => {
  req.session.islogin = false;
  req.session.admin = "";
  res.redirect("/admin");
};


exports.login=async(req,res,next)=>{
  res.render("admin/login", {
    title: "Login",
    err: "",
    msg: ""
  });
};

exports.dashboard = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/dashboard", {
      title: "Dashboard",
      error: "",
      message: "",
      admin: sess.admin
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/admin");
  }
};

exports.alluser= async (req, res) => {
  var sess = req.session;
  if (
    Object.prototype.hasOwnProperty.call(sess, "islogin") &&
    sess.islogin == true
  ) {
    var allUser = await UserModel.find();
    res.render("admin/all-users", {
      admin: sess.admin,
      allUser: allUser,
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


// exports.alluser = async (req, res, next) => {
//   var sess = req.session;
//   // var dbUser = await User.find();
//   // console.log(dbUser);
//   if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
//     res.render("admin/all-users", {
//       title: "All Vendors",
//       error: "",
//       message: "",
      
//       user: sess.user
//     });
//   } else {
//     req.flash("error", "Session expired");
//     res.redirect("/admin");
//   }
// };

exports.addVendor=async(req,res,next)=>{
  var sess= req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/add-vendor", {
      title: "All Vendors",
      admin: sess.admin,
      error: "",
      message: "",
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/admin/login");
  };
};

exports.addUsers = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/add-users", {
      title: "Add Users",
      admin: sess.admin,
      error: "",
      message: "",
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/admin/login");
  }
};

exports.allVendors = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/all-vendors", {
      title: "All Vendors",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/admin/login");
  }
};

exports.addPost = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/add-post", {
      title: "All Posts",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/admin/login");
  }
};



exports.allPosts = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/all-posts", {
      title: "All Posts",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/admin");
  }
};

exports.allArticles = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/all-articles", {
      title: "All Articles",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/admin");
  }
};
exports.blogPost=async(req,res,next)=>{
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/add-blog-post", {
      title: "Blog Post",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/admin");
  }
};


exports.allPayments = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/all-payments", {
      title: "All Payments",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("admin/");
  }
};

exports.adminProfile = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/admin-profile", {
      title: "Admin Profile",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("admin/");
  }
};

exports.adminEditProfile = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/admin-edit-profile", {
      title: "Admin Edit Profile",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("admin/");
  }
};

exports.userProfile = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/user-profile", {
      title: "User Profile",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/login");
  }
};

exports.editUserProfile = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("admin/admin-edit-profile", {
      title: "User Edit Profile",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/login");
  }
};


exports.profile = async (req, res, next) => {
  var sess = req.session;
  if (sess.hasOwnProperty("islogin") && sess.islogin == true) {
    res.render("user/profile-setting", {
      title: "Profile-settings",
      error: "",
      message: "",
      admin: sess.admin,
    });
  } else {
    req.flash("error", "Session expired");
    res.redirect("/login");
  }
};
