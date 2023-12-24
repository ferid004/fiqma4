import mongoose  from 'mongoose';

const productsSchema = new mongoose.Schema({
    name: String,
    price:Number
  });

export const productsModel = new mongoose.model('products', productsSchema);
