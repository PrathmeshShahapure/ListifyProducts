import mongoose  from "mongoose";

const productSchema= new mongoose.Schema({
    name:{ type:String, requried:true,trim:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
},{timestamps:true});

const productModel=mongoose.model("product",productSchema);

export default productModel;