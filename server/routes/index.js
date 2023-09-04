const express = require('express');
const router = express.Router();
//Routes
const userRoutes = require('./userRoutes')
const blogRoutes = require('./blogRoutes')
const appointmentRoutes = require('./appointmentRoutes')    
const productRoutes = require('./productRoutes')
const categoryRoutes = require('./categoryRoutes')
const orderRoutes = require('./orderRoutes')


router.use('/users',userRoutes)
router.use('/blogs',blogRoutes)
router.use('/appointments',appointmentRoutes)
router.use('/products',productRoutes)
router.use('/category',categoryRoutes)
router.use('/order',orderRoutes)

module.exports = router