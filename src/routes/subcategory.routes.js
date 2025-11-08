const express = require("express")
const router = express.Router()
const controller = require("../controllers/subcategory.controller")

router.post("/", controller.createSubCategory)
router.get("/", controller.getAllSubCategory)
router.get("/category/:id", controller.getAllSubCategoryunderCategory)
router.get("/:id", controller.getSubCategoryById)
router.put("/", controller.updateItem)

module.exports = router;