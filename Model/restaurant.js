const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    location: {
      type: {
        type: String,
        default: "Polygon",
      },

      coordinates: [Number],
    },
  },
  {
    collection: "restaurants",
  }
);
const restaurants = mongoose.model("Restaurant", restaurantSchema);

restaurants.collection.createIndex({ geometry: "2dsphere" });

module.exports = restaurants;
