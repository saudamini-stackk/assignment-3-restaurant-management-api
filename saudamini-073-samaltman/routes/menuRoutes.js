const express = require("express");

const {
    createMenuItem,
    getMenuItems,
    getMenuItem,
    updateMenuItem,
    deleteMenuItem
} = require("../controllers/menuController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create menu item
router.post("/", authMiddleware, createMenuItem);

// Get all menu items
router.get("/", authMiddleware, getMenuItems);

// Get one menu item
router.get("/:id", authMiddleware, getMenuItem);

// Update menu item
router.put("/:id", authMiddleware, updateMenuItem);

// Delete menu item
router.delete("/:id", authMiddleware, deleteMenuItem);

module.exports = router;