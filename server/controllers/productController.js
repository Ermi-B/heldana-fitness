const db = require("../models");
const Blog = db.Blog;
const Product = db.Product;


exports.getAllProducts = async(req,res)=>{
    try{
        const product = await Product.findAll({
            include:[{model:Category}]
        })
        if(!product){
            return res.status(404).json({message:'No Prouducts found'})
        }
        res.status(200).json({product})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getProductById = async(req,res)=>{
    try{
        const {id} = req.params
        const product = await Product.findByPk(id,{
            include:[{model:Category}]
        })
        if(!product){
            return res.status(404).json({message:'no products found with this id'})
        }
        res.status(200).json({product})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.createProduct = async (req, res) => {
    try {
      const { name, size,price,description,color,quantity,image_url } = req.body;
      const product = await Product.create({
        name, size,price,description,color,quantity,image_url
      });
      if(product){
          res.status(201).json({product,message: "product created successfully"});
      }
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  };

  exports.updateProduct = async (req, res) => {
   
    const { name, size,price,description,color,quantity,image_url } = req.body;
  
    try {
      const product = await Product.findByPk(req.params.id);
  
      if (product) {
        // Update the blog record
        await product.update({
            name, size,price,description,color,quantity,image_url
          });
  
        res.status(200).json({blog: product,message:"product updated successfully"}); // Respond with the updated blog
      } else {
        res.status(404).json({ message: 'product not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.deleteProduct = async (req, res) => {   
  
    try {
      const product = await Product.findByPk(req.params.id);
  
      if (product) {
        // Delete the blog record
        await product.destroy();
  
        res.status(201).json({product,message:"deleted successfully"}); 
      } else {
        res.status(404).json({ message: 'product not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}