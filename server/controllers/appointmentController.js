const db = require("../models");
const Appointment = db.Appointment;
const User = db.User;

exports.createAppointment = async(req,res) => {
    try{
        const { date,time,goals,notes } = req.body;
        const appointment = await Appointment.create({
            date: date,
            time: time,
            notes: notes,
            goals: goals
        })
        if(appointment){
            res.status(200).json({appointment,message:'appointment created successfully'});
        }
    }catch(error){
        res.status(500).json({message: error.message})
    }
}

exports.getAllAppointment = async(req,res)=>{
    try{
        const appointment = await Appointment.findAll({
            include: [{ model: User }], // Include the associated user data
        })
    if(!appointment){
      return  res.status(404).json({message: 'Appointment not found'})
        
    }
    res.json({appointment})
    }catch(error){
        res.status(500).json({message: error})
    }
}

exports.getAppointmentById = async (req, res) => {
    try {
      const { id } = req.params;  

      const appointment = await Appointment.findByPk(id, {
        include: [{ model: User }], // Include the associated user data
      });
  
      if (!appointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
  
      res.status(200).json(appointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

exports.deleteAppointment = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Use Sequelize to find the appointment by its ID
      const appointment = await Appointment.findByPk(id);
  
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
      await appointment.destroy();
  
      res.status(201).json({appointment,message:"deleted successfully"}); // Respond with a 204 No Content status for a successful deletion
    } catch (error) {
      console.error('Error deleting appointment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

exports. updateAppointment = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedAppointmentData = req.body;
  
      // Use Sequelize to find the appointment by its ID
      const appointment = await Appointment.findByPk(id);
  
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
  
      // Update the appointment data
      await appointment.update(updatedAppointmentData);
  
      res.status(200).json(appointment); // Respond with the updated appointment data
    } catch (error) {
      console.error('Error updating appointment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };