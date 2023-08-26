const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')
const blogRoutes = require('./blogRoutes')

router.use('/users',userRoutes)
router.use('/blogs',blogRoutes)

module.exports = router