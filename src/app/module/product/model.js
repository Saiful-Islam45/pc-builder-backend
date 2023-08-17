import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  image: String,
  productName: String,
  category: String,
  status: String,
  price: Number,
  description: String,
  keyFeatures: String,
  individualRating: Number,
  averageRating: Number,
  reviews: [{
    userName: String,
    comment: String,
    time: String,
  }],
},
{
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
}
);

const Product = mongoose.model('Product', productSchema);

export default Product;
