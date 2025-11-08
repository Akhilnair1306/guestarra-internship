module.exports = {
    createItem: `
        INSERT INTO items (category_id, sub_category_id, name, image, description, tax_applicable, tax, base_amount, discount, total_amount)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        RETURNING *;
    `,

    getAll: `
        SELECT * FROM items;
    `,

    getAllItemsUnderSubCategory: `
        SELECT * FROM items
        WHERE sub_category_id = $1;
    `,

    getAllItemsUnderCategory: `
        SELECT * FROM items
        WHERE category_id = $1;
    `,

    getItemsById: `
        SELECT * FROM items
        WHERE id::text = $1 OR name= $1;
    `,
     
    updateItem: `
        UPDATE items
        SET
            category_id = $1,
            sub_category_id = $2,
            name = $3,
            image = $4,
            description = $5,
            tax_applicable = $6,
            tax = $7,
            base_amount = $8,
            discount = $9,
            total_amount = $10
        WHERE id = $11
        RETURNING *;
    `,

    searchItemsByName: `
        SELECT * FROM items
        WHERE name ILIKE '%' || $1 || '%';
    `

}