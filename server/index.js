import express from 'express';
import mongoose  from 'mongoose';
import { productsModel } from './src/modules/productsSchema.js';



const app = express()
app.use(express.json())
// cors
// app.use(require("cors")())
const port = 3000




// mongoose connet

mongoose.connect('mongodb+srv://ferid:OFzSlirfNy5XL3Hm@cluster0.o4zo8na.mongodb.net/')
  .then(() => console.log('Connected!'));





// normal get
app.get('/', async(req, res) => {
   const products= await productsModel.find({});
    res.send(products);
});

// id'ye gore get
app.get('/:id', async(req, res) => {
    const {id}=req.params.id
    const products=await productsModel.findById(id);
    res.send(products);
})

// normal post 
app.post('/', async(req, res) => {
    const products=new productsModel(req.body);
    await products.save()
    res.send(products);
})


//normal put id'ye gore
app.put('/:id', async(req, res) => {
    const {id}=req.params.id
    const products=await productsModel.findByIdAndUpdate(id,req.body);
    res.send(products);
})

// normal delete
app.delete('/:id', async(req, res) => {
    const {id}=req.params.id
    const products=await productsModel.findOneAndDelete(id);
    res.send(products);
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

