# Menu Management API

A RESTful API built with Node.js, Express, and PostgreSQL for managing categories, subcategories, and items in a menu system.

## Features

-  Category Management (CRUD operations)
-  Subcategory Management with category relationships
-  Item Management with tax and discount calculations
-  Pagination support
-  Filter items by category or subcategory

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **CORS:** Enabled for cross-origin requests

## Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-directory>
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory
```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
```

4. Set up the database
```bash
# Create database and run migrations
psql -U postgres
CREATE DATABASE your_database_name;
# Run your SQL schema file
```

5. Start the server
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/categories` | Create a new category |
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/:id` | Get category by ID |
| PUT | `/api/categories` | Update a category |

### Subcategories

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/subcategory` | Create a new subcategory |
| GET | `/api/subcategory` | Get all subcategories |
| GET | `/api/subcategory/:id` | Get subcategory by ID |
| GET | `/api/subcategory/category/:id` | Get all subcategories under a category |
| PUT | `/api/subcategory` | Update a subcategory |

### Items

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/items` | Create a new item |
| GET | `/api/items` | Get all items |
| GET | `/api/items/:id` | Get item by ID |
| GET | `/api/items/category/:id` | Get all items under a category |
| GET | `/api/items/subcategory/:id` | Get all items under a subcategory |
| GET | `/api/items/search?q=query` | Search items by name with pagination |
| PUT | `/api/items` | Update an item |

## API Examples

### Create a Category
```bash
POST /api/categories
Content-Type: application/json

{
  "name": "Beverages",
  "image": "https://example.com/beverages.jpg",
  "description": "Hot and cold beverages",
  "tax_applicable": true,
  "tax": 5.0,
  "tax_type": "percentage"
}
```

### Create an Item
```bash
POST /api/items
Content-Type: application/json

{
  "category_id": 1,
  "sub_category_id": 1,
  "name": "Green Tea",
  "image": "https://example.com/green-tea.jpg",
  "description": "Premium green tea",
  "tax_applicable": true,
  "tax": 5.0,
  "base_amount": 120.0,
  "discount": 10.0,
  "total_amount": 114.0
}
```


## Project Structure

```
├── controllers/          # Route controllers
│   ├── category.controller.js
│   ├── subcategory.controller.js
│   └── items.controller.js
├── models/              # Database models
├── routes/              # API routes
│   ├── category.routes.js
│   ├── subcategory.routes.js
│   └── items.routes.js
├── config/              # Configuration files
├── .env                 # Environment variables
├── .gitignore          # Git ignore file
├── app.js              # Express app setup
├── server.js           # Server entry point
└── package.json        # Dependencies
```
