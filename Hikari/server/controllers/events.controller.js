const Event = require('../models/events');

const eventCtrl = {};

eventCtrl.getEvents = async (req, res) =>{
  //El async await sirve para las repuestas/esperas a la base de datos.
  //El await sirve para indicarle al codigo que esa consulta va a tomar tiempo
  const events = await Event.find();
  res.json(events);
}

eventCtrl.createEvent = async (req, res) => {
  const event = new Event(req.body);
  await event.save();
  res.json({
    'status': 'Evento registrado'
  });
}

eventCtrl.getEvent = async (req,res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
}

eventCtrl.editEvent = async (req, res) => {
  const { id } = req.params;
  const event = {
    name: req.body.name,
    altitud: req.body.altitud,
    latitud: req.body.latitud
  };
  await Event.findByIdAndUpdate(id, {$set: event}, {new: true});
  res.json({status: 'Evento actualizado'});
}

eventCtrl.deleteEvent = async (req, res) => {
  await Event.findByIdAndRemove(req.params.id);
  res.json({status: 'Evento cancelado'});
}


module.exports = eventCtrl;
