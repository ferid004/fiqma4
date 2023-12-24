
import express from 'express';
import { productsModel } from './src/modules/productsSchema.js';
import { deleteid, getall, getid, post, putid } from '../controller/productsController.js';


const router=express.Router()

router.get('/', getall);
 
 // id'ye gore get
 router.get('/:id',getid)
 
 // normal post 
 router.post('/', post)
 
 
 //normal put id'ye gore
 router.put('/:id',putid)
 
 // normal delete
 router.delete('/:id',deleteid)
 
 export default router;