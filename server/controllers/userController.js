const db = require('../models')
const User = db.user


// /users/profile
exports.getProfile = async (req, res) => {
    try{
        const users = await User.findAll();
    if(users){
        res.status(200).json(users);
    }
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

exports.register = async (req, res) => {
    
}

exports.login = async (req, res) => {
    
}
