const Restaurants = require("../Model/restaurant.js");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurants.find().limit(5);
    res.status(200).json({ success: true, message: restaurants });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

const createRestaurants = async (req, res) => {
  const { name, lon, lat } = req.body;
  try {
    const restaurants = await Restaurants.create({
      name,
      location: {
        coordinates: [lon, lat],
      },
    });
    res.status(200).json({ success: true, message: restaurants });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

const getRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurants = await Restaurants.findById(id);
    res.status(200).json({ success: true, message: restaurants });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({
      message: `${id} id tai restaurant oldsongui`,
      error: error.message,
    });
  }
  try {
    const restaurants = await Restaurants.findByIdAndDelete(id);
    res.status(201).json({
      message: `${id} id tai restaurant amjilttai USTLAA`,
      restaurants,
      success: true,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

const getNearBranch = async (req, res) => {
  console.log("POST");
  const { lon, lat } = req.body;
  const { distance } = req.query;

  console.log("POS-LON", lon);
  console.log("POS-LAT", lat);
  console.log("POS-LAT", req.query);

  try {
    const branches = await Restaurants.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: [lon, lat] },
          $maxDistance: distance,
        },
      },
    });
    res.status(200).json({ success: true, branches });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ success: false, message: error });
  }
};
module.exports = {
  getRestaurants,
  createRestaurants,
  deleteRestaurant,
  getRestaurant,
  getNearBranch,
};
