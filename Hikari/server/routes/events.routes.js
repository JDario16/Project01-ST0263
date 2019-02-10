const express = require('express');
const router = express.Router();

const evCtrl = require('../controllers/events.controller');

//Esta es la api rest, para enviar .json
router.get('/', evCtrl.getEvents);
router.post('/', evCtrl.createEvent);
router.get('/:id', evCtrl.getEvent);
router.put('/:id', evCtrl.editEvent);
router.delete('/:id', evCtrl.deleteEvent);

module.exports = router;
