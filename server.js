const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const menuRoutes = require("./routes/menuRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/", authRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/menu", menuRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Restaurant Management API"
    });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });