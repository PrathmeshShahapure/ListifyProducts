import mongoose from "mongoose";
import productModel from "../models/product.js";

export const getProducts = async(req,res)=>{
    try {
       const products= await productModel.find({});
        res.status(200).json({success:true,data:products})
        
    } catch (error) {
        console.log("Errror :" , error.message);
        res.status(500).json({success:false,message:"Server Error"})
    }
}

export const createProduct = async(req,res)=>{
    const product=req.body;
    if( !product.name || !product.price || !product.image)
    {
        return res.status(400).json({success:false,message:"Please fill up all the fileds"});
    }

    const newProduct = new productModel(product);
    
    try {
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});
    } catch (error) {
        console.log("Error is creating Product ",error.message);
        res.status(500).json({success:false,message:"Server Error"})
    }
}

export const updateProduct =async (req,res)=>{
    const {id}= req.params; 
    const product=req.body;

     if(!mongoose.Types.ObjectId.isValid(id))
    {
      return  res.status(400).json({success:false,message:"Invalid Id"})
    }
    try {
         const updatedProduct =await productModel.findByIdAndUpdate(id,product,{new:true});
         res.status(200).json({success:true,data:updatedProduct})
        
    } catch (error) {
        console.log("errror :",error.message);
        res.status(500).json({success:false,message:"Server Error"})
    }
}
export const deleteProduct = async(req,res)=>{
    const {id}=req.params;
    
     if(!mongoose.Types.ObjectId.isValid(id))
    {
      return  res.status(400).json({success:false,message:"Invalid Id"})
    }
    
    try {
        await productModel.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product Deleted"})
        
    } catch (error) {
        console.log("Errror :",error.message);
        res.status(500).json({success:false,message:"Server Error"})
    }
}