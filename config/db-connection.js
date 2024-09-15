const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;
const dbgr = require("debug")("development:mongoose");
mongoose
  .connect(`${mongoURI}`)
  .then(() => {
    dbgr("connected");
  })
  .catch((err) => {
    dbgr(err);
  });

module.exports = mongoose.connection;
