const express = require("express")
const router = express.Router()
const controller = require("../controllers/category.controller")

router.post("/", controller.createCategory)
router.get("/", controller.getCategory);
router.get("/:id", controller.getCategoryById);
router.put("/", controller.updateItem)

module.exports = router;