const express = require('express');
const hotelRoutes = require('./hotelRoutes');
const roomRoutes = require('./roomRoutes');

const router = express.Router();

router.use('/hotel', hotelRoutes);
router.use('/room', roomRoutes);

module.exports = router;
