const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create Server
const app = express();
// Cors Enabled
app.use(cors({ origin: "*" }));
// Payload Size
app.use(express.json({ limit: "50mb" }));

// Routes
app.use("/api/users", require("./api/users"));
app.use("/api/pizza", require("./api/pizza"));
app.use("/api/order", require("./api/order"));

// MongoDb Connection
const url = `mongodb://localhost:27017/Domino'sDB`;
mongoose.connect(url).then(() => {
  console.log("Connected to database!", url);
}).catch((error) => {
  console.log("Connection failed!:", error);
});


app.listen(8000, () => console.log("Example app listening on port 8000!"));
