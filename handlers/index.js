import { create, deleteProd, find, findById, update } from "../db/queries.js"

const getAllProducts = async (req, res) => {
    try {
        const products = await find()
        return res.status(200).json({ products })
    } catch (error) {
        console.log(error);
    }
}
const getProduct = async (req, res) => {
    const id = req.params.id
    try {
        const product = await findById(id)
        return res.status(200).json({ product })
    } catch (error) {
        console.log(error);
    }
}



const createProduct = async (req, res) => {
    const { title, description, price } = req.body

    if (!title || !description || !price) {
        return res.json({ message: 'Input parameters are missing' })
    }

    try {
        const product = await create(title, description, price)
        return res.status(201).json({ product })
    } catch (error) {
        console.log(error);
    }

}
const updateProduct = async (req, res) => {
    const { title, description, price } = req.body
    const id = req.params.id

    if (!title || !description || !price || !id) {
        return res.json({ message: 'Input parameters are missing' })
    }

    try {
        const product = await update(title, description, price, id)
        return res.status(201).json({ product })
    } catch (error) {
        console.log(error);
    }
}




const deleteProduct = async (req, res) => {
    const id = req.params.id

    if (!id) {
        return res.json({ message: 'Input parameters are missing' })
    }

    try {
        const product = await deleteProd(id)
        return res.status(201).json({ product })
    } catch (error) {
        console.log(error);
    }

}


export { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct }
