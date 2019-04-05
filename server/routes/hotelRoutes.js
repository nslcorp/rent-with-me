const express = require('express');
const router = express.Router();

const hotel = require('../controllers/HotelController')

router.get('/', hotel.fetchAll);
router.get('/:id', hotel.fetch);

router.post('/', hotel.create);
router.put('/:id', hotel.edit);
router.delete('/:id', hotel.delete);

module.exports = router;
