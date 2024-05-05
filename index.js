require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./db");

connectDb();

// middlewares
app.use(express.json());

// importing routes
const userRoutes = require("./routes/user");
const reservationRoutes = require("./routes/reservation");
const appointmentRoutes = require("./routes/appointment");

// user routes
app.use("/api/user", userRoutes);
// reservation routes
app.use("/api/reservation", reservationRoutes);
// appoinment routes
app.use("/api/add-appointment", appointmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
