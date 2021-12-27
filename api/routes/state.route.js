const router = require("express").Router();
const StateController = require("../controllers/state.controller");

router.get("/", StateController.getStates);
router.get("/:id", StateController.getState);
router.post("/", StateController.saveState);

module.exports = router;
