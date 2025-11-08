module.exports = {
    createCategory: `
        INSERT INTO categories (name, image, description, tax_applicable, tax, tax_type)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `,

    getAllCategories: `
        SELECT * FROM categories;
    `,

    getCategoryById: `
        SELECT * FROM categories WHERE id=$1;
    `,

    getCategoryByName: `
        SELECT * FROM categories WHERE name= $1;
    `,

    updateCategory: `
        UPDATE categories
        SET 
            name = $1,
            image = $2,
            description = $3,
            tax_applicable = $4,
            tax = $5
        WHERE id = $6
        RETURNING *;
        `
}