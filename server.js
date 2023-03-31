const express = require("express");
require("dotenv").config();
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/mongodb");
// const Neighborhood = require("./Model/neighborhood");
const restaurantRoutes = require("./Routes/restaurantRoutes");

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

const server = express();
server.use(cors());
server.use(express.json());

server.use("/restaurants", restaurantRoutes);

// server.get("/", async (req, res) => {
//   try {
//     const neighborhoods = await Neighborhood.find().limit(5);
//     res.status(200).json({ success: true, message: neighborhoods });
//   } catch (error) {
//     res.status(400).json({ success: false, message: error });
//   }
// });

connectDB(MONGO_URI);
server.listen(PORT, () => {
  console.log(`Server aslaa port ${PORT}`.rainbow);
});
