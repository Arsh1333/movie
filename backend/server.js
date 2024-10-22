import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDb.db.js";
dotenv.config({
  path: "./.env",
});
const app = express();
app.get("/", (req, res) => {
  res.send("Every little thing is gonna be alright");
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server up and running on port ${process.env.PORT}`);
    });
    console.log("DB connected with server");
  })
  .catch((err) => console.log(err));
