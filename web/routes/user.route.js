const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const HomeController = require("../controllers/home.controller");

router.get("/dashboard", UserController.dashboard);
router.get("/allPost", UserController.allPost);
router.get("/postAdd", UserController.postAdd);
router.get("/profile", UserController.profile);
router.get('/profileSetting',UserController.profileSetting);

router.post("/signup", HomeController.user_signup);
router.post("/login", HomeController.user_signin);

module.exports = router;
