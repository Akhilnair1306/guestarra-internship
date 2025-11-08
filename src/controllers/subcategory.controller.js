const SubCategoryService = require("../services/subcategory.service")

exports.createSubCategory = async(req, res, next) => {
    try {
        const subCategory = await SubCategoryService.create(req.body)
        res.status(201).json({success: true, data:subCategory})
    } catch (error) {
        next(error)
    }
}

exports.getAllSubCategory = async(req, res, next) => {
    try {
        const subCategories = await SubCategoryService.getAll()
        if (!subCategories) return res.status(404).json({ message: "Error not Found"});
        res.status(201).json({success: true, data:subCategories})
    } catch (error) {
        next(error)
    }
}

exports.getAllSubCategoryunderCategory = async(req, res, next) => {
    try {
        const subCategories = await SubCategoryService.getAllSubCategoriesUnderCategory(req.params.id)
        if (!subCategories) return res.status(404).json({ message: "Error not Found"});
        res.status(201).json({success: true, data:subCategories})
    } catch (error) {
        next(error)
    }
}

exports.getSubCategoryById = async(req, res, next) => {
    try {
        const subCategories = await SubCategoryService.getBySubCategoryId(req.params.id)
        if (!subCategories) return res.status(404).json({ message: "Error not Found"});
        res.status(201).json({success: true, data:subCategories})
    } catch (error) {
        next(error)
    }
}


exports.updateItem = async(req,res,next) => {
    try {
        const item = await SubCategoryService.updateItem(req.body)
        // if (!item) return res.status(404).json({})
        res.status(201).json({success: true, data: item})
    } catch(error) {
        next(error)
    }
}