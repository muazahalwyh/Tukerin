import mongoose from 'mongoose';
// create schema
const Product = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

export default mongoose.model('Products', Product);
