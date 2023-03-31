const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: String,
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: [Number],
  },
});
const restaurants = mongoose.model("Restaurant", restaurantSchema);

restaurants.collection.createIndex({ location: "2dsphere" });

module.exports = restaurants;
