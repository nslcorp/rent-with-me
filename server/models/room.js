const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId


const roomProps = {
  title: { type: String, required: true, max: [128, 'Too long, max is 128 characters'] },
  description: { type: String, required: false },
  bedrooms:  { type: Number, required: false, min: [1, 'Min bedroom is 1'] },
  dailyRate: { type: String, required: false, min: [1, 'Min price 1'] },
  dailyRateSize: { type: String, enum: ['small', 'medium', 'large', 'extra-large'] },
  hotelId: [{ type: objectId, ref: 'Hotel' }]
}

const Room = mongoose.model('Room', mongoose.Schema(roomProps));
//5caca0fb310d69216e84dc3f

module.exports = {
  Room,
  roomProps
}