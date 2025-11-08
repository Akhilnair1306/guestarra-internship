const pool = require("../config/db")
const queries = require("../db/queries/subcategory.queries")

exports.create = async(data) => {
    const values = [
        data.category_id,
        data.name,
        data.image,
        data.description,
        data.tax_applicable,
        data.tax
    ]
    const result = await pool.query(queries.createSubCategory, values)
    return result.rows[0]
}

exports.getAll = async() => {
    const result = await pool.query(queries.getAllSubCategories)
    return result.rows
}

exports.getAllSubCategoriesUnderCategory = async(data)=>{
    const result = await pool.query(queries.getAllSubCategoriesUnderCategory, [data])
    return result.rows
}

exports.getBySubCategoryId = async(data) => {
    const result = await pool.query(queries.getSubCategoryById, [data])
    return result.rows[0]
}

exports.updateItem =async(data) => {
    const values = [
        data.category_id,
        data.name,
        data.image,
        data.description,
        data.tax_applicable,
        data.tax,
        data.id
    ]
    const result = await pool.query(queries.updateCategory, values)
    return result.rows[0]
}