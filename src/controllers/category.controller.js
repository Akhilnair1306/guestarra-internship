const CategoryService = require("../services/category.service")

exports.createCategory = async(req, res, next) => {
    try {
        const category = await CategoryService.create(req.body);
        res.status(201).json({ success: true, data: category});
    } catch (err) {
        next(err);
    }
}

exports.getCategory = async(req, res, next) => {
    try {
        const categories = await CategoryService.getAll();
        res.json({success: true, data: categories})
    } catch (err) {
        next(err);
    }
}

exports.getCategoryById = async(req,res,next) => {
    try {
        const category = await CategoryService.getById(req.params.id);
        if (!category) return res.status(404).json({ message: "Error not Found"});
        res.json({success: true, data: category});
    } catch (err) {
        next(err);
    }
}

exports.updateItem = async(req,res,next) => {
    try {
        const item = await CategoryService.updateItem(req.body)
        // if (!item) return res.status(404).json({})
        res.status(201).json({success: true, data: item})
    } catch(error) {
        next(error)
    }
}

exports.updateItem = async(req,res,next) => {
    try {
        const item = await CategoryService.updateItem(req.body)
        // if (!item) return res.status(404).json({})
        res.status(201).json({success: true, data: item})
    } catch(error) {
        next(error)
    }
}