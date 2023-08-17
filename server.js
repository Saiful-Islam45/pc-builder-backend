
import express from 'express';
import mongoose from'mongoose';
import productRoutes from'./src/app/module/product/routes.js';
import dotenv from "dotenv"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL
app.use(express.json());

mongoose.connect(dbUrl)
.then(() => console.log('Connected to database'));

app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
