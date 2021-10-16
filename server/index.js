const express = require("express");
const app = express();
const cors = require("cors");


// management of middleware

app.use(express.json()); // req.body access data from client side
app.use(cors());

// handling routes

app.use("/auth", require("./route"));

app.use("/home", require("./homepage"));

app.listen(3001, () => {
    console.log("running server on port 3001");
});