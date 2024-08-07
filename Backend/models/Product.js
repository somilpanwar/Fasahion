const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    product_id:{
        type: Number,
        required: true,
        unique :true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    productImg:{
    type:String,
    required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:String,
        required:true,
    },
    product_qty:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    sub_category:{
        type:String,
        required:true,
    },
    rating:{
        type:String,
        required:true,
    },
    colors:{
        type:String,
        required:true,
    },
})
const ProductCollection = mongoose.model("products", ProductSchema);
module.exports =  ProductCollection;