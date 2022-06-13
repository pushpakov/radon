const { count } = require("console")
const productModel = require("../models/productModel")

 //- Write a POST api to create a product from the product details in request body. 

 const createProduct = async function (req, res) {
    let data = req.body
    let createdProduct = await productModel.create(data)
    res.send({ msg: createdProduct }) 
}
module.exports.createProduct = createProduct 
