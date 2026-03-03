//import
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");

//config
dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connection to the DB secured");
  })
  .catch((e) => {
    console.log(`Error ${e}`);
  }); 

const app = express();
const port = 5000;

app.use(express.json()); //middleware

//routes middleware
app.use(userRoutes);

app.listen(port, () => {
  console.log(`The server is running`);
});
