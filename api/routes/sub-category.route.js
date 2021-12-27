const router = require("express").Router();
const subCategoryController = require("../controllers/sub-category.controller");

router.get("/", subCategoryController.getSubCategories);
router.get("/:id", subCategoryController.getSubCategory);
router.post("/", subCategoryController.saveSubCategory);

module.exports = router;
