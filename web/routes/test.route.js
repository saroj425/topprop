const router = require("express").Router();
const { getPosts } = require("../helpers/utlity");
router.get("/", async (req, res) => {
  try {
    res.json({ posts: await getPosts("5d6e34ca59a600147021ed98") });
  } catch (e) {
    res.json({ msg: e.message });
  }
});

module.exports = router;
