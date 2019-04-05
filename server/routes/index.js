const express = require('express');
const place = require('./place.routes');

const router = express.Router();

router.use('/place', place);

module.exports = router;
