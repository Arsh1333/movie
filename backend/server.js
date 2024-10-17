import express from "express";
import dotenv from "dotenv";
import cors from "cors";
let app = express();

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req, res) => {
  res.send("Hello world");
});
app.listen(PORT || 5000, () => {
  console.log(`Server up and running on ${PORT}`);
});
