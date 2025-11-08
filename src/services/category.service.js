const pool = require("../config/db");
const queries = require("../db/queries/category.queries");

exports.create = async (data) => {
    const values = [
        data.name,
        data.image,
        data.description,
        data.tax_applicable,
        data.tax,
        data.tax_type,
    ];
    const result = await pool.query(queries.createCategory, values);
    return result.rows[0]
}

exports.getAll = async() => {
    const result = await pool.query(queries.getAllCategories);
    return result.rows
}

exports.getById = async(id) => {
    const result = await pool.query(queries.getCategoryById, [id]);
    return result.rows[0];
}

exports.updateItem =async(data) => {
    const values = [
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