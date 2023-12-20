const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user-routes");
const adminRouter = require("./routes/admin-routes");
const movieRouter = require("./routes/movie-route");
const bookingRouter = require("./routes/Booking-routes");
dotenv.config();

const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "POST", "PUT", "DELETE");
  res.header("Access-Control-Allow-Headers", "Content-type, Authorization");
  next();
});

//middleware section

app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/movies", movieRouter);
app.use("/booking", bookingRouter);

mongoose.connect(`${process.env.DATABASE}`);

app.listen(PORT, () => {
  console.log(`Database connected.`);
});
