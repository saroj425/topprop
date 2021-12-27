const router = require("express").Router();
const HomeController = require("../controllers/home.controller");

router.get("/", HomeController.homepage);
router.get("/login", HomeController.login);
router.get("/register", HomeController.register);
router.get("/forgotpassword", HomeController.forgotpassword);
router.get("/listings", HomeController.listings);
router.get("/categories", HomeController.categories);
router.get("/logout", HomeController.user_logout);

router.post("/signup", HomeController.user_signup);
router.post("/login", HomeController.user_signin);


module.exports = router;
