const router = require("express").Router();
const CategoryController = require("../controllers/category.controller");

router.get("/", CategoryController.getCategories);
router.post("/", CategoryController.saveCategory);

module.exports = router;
