const app = require("./app");

const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
