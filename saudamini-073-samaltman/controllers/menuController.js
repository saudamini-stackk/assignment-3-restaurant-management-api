const MenuItem = require("../models/MenuItem");

// Create menu item
const createMenuItem = async (req, res) => {
    try {
        const { name, description, price, category, restaurant } = req.body;

        if (!name || !description || !price || !category || !restaurant) {
            return res.status(400).json({
                message: "Please provide name, description, price, category and restaurant"
            });
        }

        const menuItem = await MenuItem.create({
            name,
            description,
            price,
            category,
            restaurant
        });

        res.status(201).json({
            message: "Menu item created successfully",
            menuItem
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create menu item",
            error: error.message
        });
    }
};

// Get all menu items
const getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find()
            .populate("restaurant");

        res.status(200).json({
            menuItems
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch menu items",
            error: error.message
        });
    }
};

// Get one menu item
const getMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id)
            .populate("restaurant");

        if (!menuItem) {
            return res.status(404).json({
                message: "Menu item not found"
            });
        }

        res.status(200).json({
            menuItem
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch menu item",
            error: error.message
        });
    }
};

// Update menu item
const updateMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!menuItem) {
            return res.status(404).json({
                message: "Menu item not found"
            });
        }

        res.status(200).json({
            message: "Menu item updated successfully",
            menuItem
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update menu item",
            error: error.message
        });
    }
};

// Delete menu item
const deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);

        if (!menuItem) {
            return res.status(404).json({
                message: "Menu item not found"
            });
        }

        res.status(200).json({
            message: "Menu item deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to delete menu item",
            error: error.message
        });
    }
};

module.exports = {
    createMenuItem,
    getMenuItems,
    getMenuItem,
    updateMenuItem,
    deleteMenuItem
};