'use strict'
const express = require('express');
const router = express.Router();
const technologies = require('./api/technologies.route');

router.use('/technologies', technologies);

module.exports = router;
