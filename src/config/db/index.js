const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dinhvan2211", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect is successfully");
  } catch (error) {
    console.log("Connect is failed");
  }
}

module.exports = { connect };
