const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    const db = await mongoose.connect(uri);
    console.log(`MongoDB -тэй холбогдлоо ${db.connection.host}`.magenta);
  } catch (error) {
    console.log("MongoDB -тэй holbogdoh uyd алдаа гарлаа: ", err);
  }
};
module.exports = connectDB;
