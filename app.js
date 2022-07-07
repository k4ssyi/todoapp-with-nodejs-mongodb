const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json()); // json形式を元にexpressを使う
app.use(express.static("./public")); // public/index.html

const PORT = 5000;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute);

// データベースと接続
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, console.log("server listening on port " + PORT));
  } catch (err) {
    console.log(err);
  }
};

start();
