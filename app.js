const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");

const PORT = 5000;

// ルーティング設計
app.use("/api/v1/tasks", taskRoute);

app.listen(PORT, console.log("server listening on port " + PORT));
