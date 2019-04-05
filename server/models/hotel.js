const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId

const hotelProps = {
  title: { type: String, required: true, max: [128, 'Too long, max is 128 characters'] },
  city: { type: String, required: true, lowercase: true, default: 'Dnipro' },
  street: { type: String, required: false, min: [4, 'Too short, min is 4 characters'] },
  description: { type: String, required: false },
  rooms: [{ type: objectId, ref: 'Room' }],
  createdAt: { type: Date, default: Date.now }
};

const Hotel = mongoose.model('Place', mongoose.Schema(hotelProps));

module.exports = {
  Hotel,
  hotelProps
}
