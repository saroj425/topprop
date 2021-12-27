const router = require("express").Router();
const AdminController = require("../controllers/admin.controller");
const TestinomialController = require("../controllers/testinomial.controller")

router.post("/signup", AdminController.register);
router.post("/login", AdminController.login);
router.get("/getalluser",AdminController.getAllUser);
router.post("/savetestinomial",TestinomialController.save_testimonial);

module.exports = router;
