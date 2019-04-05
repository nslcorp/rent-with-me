const express = require('express');
const router = express.Router();

const room = require('../controllers/RoomController')

router.get('/', room.fetchAll);
router.get('/:hotelId', room.fetch);

router.post('/', room.create);
router.put('/:id', room.edit);
router.delete('/:id', room.delete);

module.exports = router;
