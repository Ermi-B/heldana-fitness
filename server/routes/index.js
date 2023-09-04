const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')
const blogRoutes = require('./blogRoutes')
const appointmentRoutes = require('./appointmentRoutes')    
const productRoutes = require('./productRoutes')

router.use('/users',userRoutes)
router.use('/blogs',blogRoutes)
router.use('/appointments',appointmentRoutes)
router.use('/products',productRoutes)

module.exports = router