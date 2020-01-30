const express = require('express');
const db = require('../database/queries');
const router = express.Router();

router.get('/events', db.getEvents);
router.get('/events/:id', db.getEventById);
router.post('/events', db.createEvent);

module.exports = router;