const express = require('express');
const router = express.Router();

const place = require('../controllers/Place.controller')

router.get('/', place.fetchAll);
router.get('/:id', place.fetch);

router.post('/', place.create);
router.put('/:id', place.edit);
router.delete('/:id', place.delete);

module.exports = router;
