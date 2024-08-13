const mongoose = require("mongoose");
const ProductCollection = require("../models/Product");

const categories = async (req, res) => {

    try {
        const{category,productid} = req.params;
       
        let products; 
        if (category) {
          const searchcategory = category.toLowerCase();
          products = await ProductCollection.find({
            category: { $regex: new RegExp(searchcategory, "i") },
          });
          res.status(200).send(products)
        }
         else if(productid){
            products = await ProductCollection.find({
                product_id: productid
            })
            res.status(200).send(products);
        }
     } catch (error) {
        
        res.status(504).send({
            message: "error fetching products",
          });
          console.log(`Error occured : ${error}`);
      
     }



}

module.exports = categories