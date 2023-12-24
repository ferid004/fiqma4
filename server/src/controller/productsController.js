
import { productsModel } from './src/modules/productsSchema.js';


// normal get
export const getall = async(req, res) => {
    const products= await productsModel.find({});
     res.send(products);
 };
 
 // id'ye gore get
 export const getid = async(req, res) => {
     const {id}=req.params.id
     const products=await productsModel.findById(id);
     res.send(products);
 }
 
 // normal post 
 export const post = async(req, res) => {
     const products=new productsModel(req.body);
     await products.save()
     res.send(products);
 }
 
 
 //normal put id'ye gore
 export const putid = async(req, res) => {
     const {id}=req.params.id
     const products=await productsModel.findByIdAndUpdate(id,req.body);
     res.send(products);
 }
 
 // normal delete
 export const deleteid = async(req, res) => {
     const {id}=req.params.id
     const products=await productsModel.findOneAndDelete(id);
     res.send(products);
 }