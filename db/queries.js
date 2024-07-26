import { pool } from "./index.js";

const find = async () => {
    const QUERY = "SELECT * FROM products"

    try {
        const client = await pool.getConnection()
        const result = await client.query(QUERY)
        return result[0]
    } catch (error) {
        console.log("Error occured while finding all records", error)
        console.log(error);
    }
}

const findById = async (id) => {
    const QUERY = "SELECT * FROM products WHERE id = ?"

    try {
        const client = await pool.getConnection()
        const result = await client.query(QUERY, [id])
        return result[0]
    } catch (error) {
        console.log("Error occured while finding record", error)
        console.log(error);
    }
}

const create = async (title, description, price) => {
    const QUERY = `INSERT INTO products (title, description, price) VALUES(?, ?, ?)`

    try {
        const client = await pool.getConnection()
        const result = await client.query(QUERY, [title, description, price])
        return result
    } catch (error) {
        console.log("Error occured while creating product", error)
        console.log(error);
    }
}

const update = async (title, description, price, id) => {
    const QUERY = `UPDATE products SET title = ?, description = ?, price = ? WHERE id = ?`

    try {
        const client = await pool.getConnection()
        const result = await client.query(QUERY, [title, description, price, id])
        return result
    } catch (error) {
        console.log("Error occured while updating product", error)
        console.log(error);
    }
}


const deleteProd = async (id) => {
    const QUERY = `DELETE FROM products WHERE id = ?`

    try {
        const client = await pool.getConnection()
        const result = await client.query(QUERY, [id])
        return result
    } catch (error) {
        console.log("Error occured while deleting product", error)
        console.log(error);
    }
}

export { find, findById, create, update, deleteProd}