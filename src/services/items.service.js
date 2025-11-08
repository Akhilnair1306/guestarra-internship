const pool = require("../config/db")
const queries = require("../db/queries/item.queries")

exports.create = async(data) => {
    const values = [
        data.category_id,
        data.sub_category_id,
        data.name,
        data.image,
        data.description,
        data.tax_applicable,
        data.tax,
        data.base_amount,
        data.discount,
        data.total_amount
    ]
    const result = await pool.query(queries.createItem, values)
    return result.rows[0]   
}

exports.getAll = async() => {
    const result = await pool.query(queries.getAll)
    return result.rows
}

exports.getAllUnderSubCategory = async(id) => {
    const result = await pool.query(queries.getAllItemsUnderSubCategory, [id])
    return result.rows
}

exports.getAllUnderCategory = async(id) => {
    const result = await pool.query(queries.getAllItemsUnderCategory, [id])
    return result.rows
}

exports.getAllById = async(id) =>{
    const result = await pool.query(queries.getItemsById, [id])
    return result.rows[0]
}

exports.updateItem =async(data) => {
    const values = [
        data.category_id,
        data.sub_category_id,
        data.name,
        data.image,
        data.description,
        data.tax_applicable,
        data.tax,
        data.base_amount,
        data.discount,
        data.total_amount,
        data.id
    ]
    const result = await pool.query(queries.updateCategory, values)
    return result.rows[0]
}

exports.searchItem = async(data) => {
    const result = await pool.query(queries.searchItemsByName, [data])
    return result.rows
}