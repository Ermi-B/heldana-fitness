const db = require("../models");
const Blog = db.Blog;

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.create({
      title: title,
      content: content,
    });
    if(blog){
        res.status(201).json({blog,message: "created successfully"});
    }
  } catch (err) {
    res.status(500).json({message: err.message});
  }
};

exports.getAllPosts= async (req, res) => {
try{
    const blogs = await Blog.findAll({})
    if(!blogs){
        res.status(404).json({message:"no blogs found!"});
    }
    res.status(200).json(blogs);
}catch (err) {
    res.status(500).json({message: err.message});
}
};

exports.getPostById= async (req, res) => {
    try{
        const blog = await Blog.findByPk(req.params.id)
        if(!blog){
            res.status(404).json({message:"blog not found with id: "+req.params.id});
            return;
        }
        res.status(200).json(blog);
    }catch (err) {
        res.status(500).json({message: err.message});
    }
};


exports.updatePost = async (req, res) => {
   
    const { title, content } = req.body;
  
    try {
      const blog = await Blog.findByPk(req.params.id);
  
      if (blog) {
        // Update the blog record
        await blog.update({
          title: title,
          content: content,
        });
  
        res.status(200).json({blog,message:"updated successfully"}); // Respond with the updated blog
      } else {
        res.status(404).json({ message: 'Blog not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  exports.deletePost = async (req, res) => {   
  
    try {
      const blog = await Blog.findByPk(req.params.id);
  
      if (blog) {
        // Delete the blog record
        await blog.destroy();
  
        res.status(201).json({blog,message:"deleted successfully"}); // Respond with a status code of 204 (No Content) for successful deletion
      } else {
        res.status(404).json({ message: 'Blog not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}