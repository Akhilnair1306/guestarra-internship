const Items = require("../services/items.service")

exports.createItems = async(req, res, next) => {
    try {
        const items = await Items.create(req.body)
        res.status(201).json({success: true, data: items})
    } catch(error) {
        next(error)
    }
}

exports.getAllItems = async (req,res,next) => {
    try {
        const items = await Items.getAll()
        if (!items) return res.status(404).json({message: "Items Not Found"})
        res.status(201).json({success: true, data: items})
    } catch (error) {
        next(error)
    }
}

exports.getAllItemsUnderSubCategory = async(req,res, next) => {
    try {
        const items = await Items.getAllUnderSubCategory(req.params.id)
        if (!items) return res.status(404).json({message: "No Items found under the specified SubCategory"})
        res.status(201).json({success: true, data: items})
    } catch(error) {
        next(error)
    }
}

exports.getAllItemsUnderCategory =async( req,res, next) => {
    try {
        const items = await Items.getAllUnderCategory(req.params.id)
        // if (!items) return res.status(404).json({message: "No Items found under the category"})
        res.status(201).json({success: true, data: items})
    } catch (error) {
        next(error)
    }
}

exports.getItemById = async(req,res,next) => {
    try {
        const items = await Items.getAllById(req.params.id)
        if (!items) return res.status(404).json({message: "No Items Found"})
        res.status(201).json({success: true, data: items})
    } catch(error) {
        next(error)
    }
}

exports.updateItem = async(req,res,next) => {
    try {
        const item = await Items.updateItem(req.body)
        // if (!item) return res.status(404).json({})
        res.status(201).json({success: true, data: item})
    } catch(error) {
        next(error)
    }
}

exports.searchItem = async(req,res,next) => {
    try {
        const searchQuery = req.query.q
        if (!searchQuery || searchQuery.trim() === '') {
            return res.status(400).json({ message: "Search query is required" });
        }
        const items = await Items.searchItem(searchQuery)
        // Validate search query exists
    res.status(200).json(items)
    } catch (error) {
        next(error)
    }
}