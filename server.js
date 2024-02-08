// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PeopleRouter = require("./controllers/people");

// APP OBJECT
const app = express();

// MIDDLE WARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); //this middleware allows us to send JSON request with our request

// ROUTES
app.use("/people", PeopleRouter);

//Test
app.get("/", (req, res) => {
  res.send("Hello World");
});

// LISTENER
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
