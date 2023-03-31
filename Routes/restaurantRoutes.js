const express = require("express");

const {
  getRestaurants,
  createRestaurants,
  deleteRestaurant,
  getRestaurant,
  getNearBranch,
} = require("../Controller/restaurantsController");

const router = express.Router();

router.route("/").post(createRestaurants).get(getRestaurants);
router.route("/:id").delete(deleteRestaurant).get(getRestaurant);
router.route("/near").post(getNearBranch);

module.exports = router;
