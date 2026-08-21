const Restaurant = require("../models/Restaurant");

// Create restaurant
const createRestaurant = async (req, res) => {
    try {
        const { name, address, cuisine, phone } = req.body;

        if (!name || !address || !cuisine || !phone) {
            return res.status(400).json({
                message: "Please provide name, address, cuisine and phone"
            });
        }

        const restaurant = await Restaurant.create({
            name,
            address,
            cuisine,
            phone
        });

        res.status(201).json({
            message: "Restaurant created successfully",
            restaurant
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create restaurant",
            error: error.message
        });
    }
};

// Get all restaurants
const getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();

        res.status(200).json({
            restaurants
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch restaurants",
            error: error.message
        });
    }
};

// Get one restaurant
const getRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found"
            });
        }

        res.status(200).json({
            restaurant
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch restaurant",
            error: error.message
        });
    }
};

// Update restaurant
const updateRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found"
            });
        }

        res.status(200).json({
            message: "Restaurant updated successfully",
            restaurant
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update restaurant",
            error: error.message
        });
    }
};

// Delete restaurant
const deleteRestaurant = async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);

        if (!restaurant) {
            return res.status(404).json({
                message: "Restaurant not found"
            });
        }

        res.status(200).json({
            message: "Restaurant deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete restaurant",
            error: error.message
        });
    }
};

module.exports = {
    createRestaurant,
    getRestaurants,
    getRestaurant,
    updateRestaurant,
    deleteRestaurant
};