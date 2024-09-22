const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const mainRoute = require("./routes/index");

const app = express();
app.options("*", cors());
app.use(express.json());

const url =
  "mongodb+srv://bipinyadav9769:bipin7yadav@cluster0.fwusuc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url).then(() => {
  console.log("DB Connection Successful !!");
});
app.use("/api/v1", mainRoute);

const port = 3001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port} ...`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
