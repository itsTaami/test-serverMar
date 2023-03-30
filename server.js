const express = require("express");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/mongodb");
const Neighborhood = require("./Model/neighborhood");
const restaurantRoutes = require("./Routes/restaurantRoutes");

const port = 8010;

const MONGO_URI =
  "mongodb+srv://azure_battamir:Taami0425@cluster0.kzfetxq.mongodb.net/azureDB?retryWrites=true&w=majority";

const server = express();

server.use(cors());
server.use(express.json());

server.use("/restaurants", restaurantRoutes);

server.get("/", async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find().limit(5);
    res.status(200).json({ success: true, message: neighborhoods });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

connectDB(MONGO_URI);
server.listen(port, () => {
  console.log(`Server aslaa port ${port}`.rainbow);
});
