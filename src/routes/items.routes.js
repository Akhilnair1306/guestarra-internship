const express = require("express")
const router = express.Router()
const controller = require("../controllers/items.controller")

router.post("/", controller.createItems)
router.get("/", controller.getAllItems)
router.get("/category/:id", controller.getAllItemsUnderCategory)
router.get("/subcategory/:id", controller.getAllItemsUnderSubCategory)
router.get("/search", controller.searchItem)
router.get("/:id", controller.getItemById)
router.put("/", controller.updateItem)


module.exports = router