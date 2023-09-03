const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes')
const blogRoutes = require('./blogRoutes')
const appointmentRoutes = require('./appointmentRoutes')    

router.use('/users',userRoutes)
router.use('/blogs',blogRoutes)
router.use('/appointments',appointmentRoutes)

module.exports = router