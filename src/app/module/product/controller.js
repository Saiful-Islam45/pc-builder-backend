import Product from "./model.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.find({_id: productId});
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const category = req.body.category;
    const product = await Product.find({category: category});
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const createdProduct = await Product.create(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = req.body;
    const result = await Product.findByIdAndUpdate(productId, updatedProduct, {
      new: true
    });
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct
};
