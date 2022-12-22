const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/users").then(() => {
  console.log("Database is connected").catch((error) => {
    console.log(error);
  });
});
module.exports = mongoose;
