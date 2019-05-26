'use strict';
const express = require('express');
const router = express.Router();

const TechsController = require('../../controllers/technologies.controller');

router.get('/', TechsController.getTechs);
router.post('/', TechsController.createTech);

module.exports = router;
