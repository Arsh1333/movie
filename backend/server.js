import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./db/connectDb.db.js";
import reviewRouter from "./routes/review.routes.js";
import userRouter from "./routes/user.routes.js";
dotenv.config({
  path: "./.env",
});
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/api/reviews", reviewRouter);
app.use("/api/users", userRouter);

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server up and running on port ${process.env.PORT}`);
    });
    console.log("DB connected with server");
  })
  .catch((err) => console.log(err));
