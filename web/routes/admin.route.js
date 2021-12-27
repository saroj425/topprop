const router = require("express").Router();
const AdminController = require("../controllers/admin.cantroller");
const TestinomialController = require("../controllers/testinomial.controller");
const UserController = require("../controllers/user.controller")

// const HomeController = require("../controllers/home.controller");
// router.post("/adminsignup", AdminController.admin_signup);
// router.post("/adminlogin", AdminController.admin_signin);

// router.post("/signup", HomeController.user_signup);
router.post("/login", AdminController.admin_signin);
router.post("/register",AdminController.admin_signup);
router.post("/userregister",UserController.user_signup);


router.get("/", AdminController.login);
router.get("/dashboard", AdminController.dashboard);
router.get("/post-ads", AdminController.addPost);
router.get("/profile", AdminController.profile);
router.get("/adminprofile/", AdminController.adminProfile);
router.get("/admin-edit-profile",AdminController.adminEditProfile);
router.get("/user-profile/:id",AdminController.userProfile);
router.get("/user-edit-profile",AdminController.userProfile);

router.get("/add-vendor", AdminController.addVendor);
router.get("/add-user", AdminController.addUsers);
router.get("/all-users", AdminController.alluser);
router.get("/all-vendors", AdminController.allVendors);
router.get("/all-posts", AdminController.allPosts);
router.get("/all-articles", AdminController.allArticles);
router.get("/add-blogpost",AdminController.blogPost);
router.get("/all-testimonials", TestinomialController.allTestimonials);
router.get('/add-testinomial',TestinomialController.addTestinomial);
router.get("/all-payments", AdminController.allPayments);
router.get("/logout",AdminController.admin_logout);

module.exports = router;
