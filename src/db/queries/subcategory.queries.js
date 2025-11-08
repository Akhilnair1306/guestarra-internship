module.exports = {
        createSubCategory: `
        INSERT INTO sub_categories (category_id, name, image, description, tax_applicable, tax)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
    `,

    getAllSubCategories: `
        SELECT * FROM sub_categories;
    `,

    getAllSubCategoriesUnderCategory: `
        SELECT * FROM sub_categories
        WHERE category_id = $1;
    `,

    getSubCategoryById: `
        SELECT * FROM sub_categories
        WHERE id::text = $1 OR name=$1;
    `,

    updateSubCategory: `
        UPDATE sub_categories
        SET 
            category_id = $1,
            name = $2,
            image = $3,
            description = $4,
            tax_applicable = $5,
            tax = $6
        WHERE id = $7
        RETURNING *;
        `
}