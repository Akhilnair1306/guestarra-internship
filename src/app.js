const express = require("express")
const app = express();
const cors = require("cors")
const categoryRoutes = require("./routes/category.routes")
const subCategoryRoutes = require("./routes/subcategory.routes")
const itemRoutes = require("./routes/items.routes")

app.use(cors());
app.use(express.json())

app.use("/api/categories", categoryRoutes)
app.use("/api/subcategory", subCategoryRoutes)
app.use("/api/items", itemRoutes)


module.exports = app;