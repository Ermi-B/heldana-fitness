const db = require("../models");
const Blog = db.Blog;
const Category = db.Category;


exports.getAllCategory = async(req,res)=>{
    try{
        const category = await Category.findAll({})
        if(!category){
            return res.status(404).json({message:'No category found'})
        }
        res.status(200).json({category})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getCategoryById = async(req,res)=>{
    try{
        const {id} = req.params
        const category = await Category.findByPk(id)
        if(!category){
            return res.status(404).json({message:'no category found with this id'})
        }
        res.status(200).json({category})
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.createCategory = async (req, res) => {
    try {
      const { name, size,price,description,color,quantity,image_url } = req.body;
      const category = await Category.create({
        name, size,price,description,color,quantity,image_url
      });
      if(category){
          res.status(201).json({category,message: "category created successfully"});
      }
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  };

  exports.updateCategory = async (req, res) => {
   
    const { name, size,price,description,color,quantity,image_url } = req.body;
  
    try {
      const category = await Category.findByPk(req.params.id);
  
      if (category) {
        // Update the blog record
        await category.update({
            name, size,price,description,color,quantity,image_url
          });
  
        res.status(200).json({blog: category,message:"category updated successfully"}); // Respond with the updated blog
      } else {
        res.status(404).json({ message: 'category not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.deleteCategory = async (req, res) => {   
  
    try {
      const category = await Category.findByPk(req.params.id);
  
      if (category) {
        // Delete the blog record
        await category.destroy();
  
        res.status(201).json({product: category,message:"deleted successfully"}); 
      } else {
        res.status(404).json({ message: 'category not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}