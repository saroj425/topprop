const router = require("express").Router();
const UserController = require("../controllers/user.controller");

router.post("/signup", UserController.register);
router.post("/login", UserController.login);
router.get("/getalluser",UserController.getAllUser);

module.exports = router;
