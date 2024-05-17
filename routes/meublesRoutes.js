const express = require("express");
const router = express.Router();
const {
  getAllMeubles,
  createMeuble,
  getMeuble,
  delMeuble,
  updateMeuble,
} = require("./../controllers/meublesController");
router.route("/").get(getAllMeubles).post(createMeuble);
router.route("/:id").get(getMeuble).delete(delMeuble).patch(updateMeuble);
module.exports = router;
