const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

//const MONGO_URI = "mongodb+srv://thanh:thanh@cluster0.ntvke.mongodb.net/mydb?retryWrites=true&w=majority";


exports.connect = () => {
  // Connecting to the database
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};
