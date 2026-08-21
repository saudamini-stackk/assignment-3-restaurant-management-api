const express = require("express");

const {
    createRestaurant,
    getRestaurants,
    getRestaurant,
    updateRestaurant,
    deleteRestaurant
} = require("../controllers/restaurantController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create restaurant
router.post("/", authMiddleware, createRestaurant);

// Get all restaurants
router.get("/", authMiddleware, getRestaurants);

// Get one restaurant
router.get("/:id", authMiddleware, getRestaurant);

// Update restaurant
router.put("/:id", authMiddleware, updateRestaurant);

// Delete restaurant
router.delete("/:id", authMiddleware, deleteRestaurant);

module.exports = router;