const db = require('../models')
const config = require('../config/config.json')
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