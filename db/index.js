const mongoose = require("mongoose");

async function connectDb() {
  mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to database successfully");
  });
}

module.exports = connectDb;
