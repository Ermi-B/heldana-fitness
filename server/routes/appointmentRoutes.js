// appointmentRoutes.js

const express = require('express');
const router = express.Router();

// Import controllers or handler functions
const AppointmentController = require('../controllers/appointmentController');

router.get('/',AppointmentController.getAllAppointment)
router.post('/',AppointmentController.createAppointment)
router.get('/:id',AppointmentController.getAppointmentById)
router.put('/:id',AppointmentController.updateAppointment)
router.delete('/:id',AppointmentController.deleteAppointment)


module.exports = router;