const mongoose = require('mongoose');

const props = {
  title: { type: String, required: true, max: [128, 'Too long, max is 128 characters'] },
  city: { type: String, required: true, lowercase: true },
  street: { type: String, required: true, min: [4, 'Too short, min is 4 characters'] },
  description: { type: String, required: false },
  price: Number,
  priceRelevant: String,
  createdAt: { type: Date, default: Date.now },
};

const placeSchema = mongoose.Schema(props);

const Place = mongoose.model('Place', placeSchema);


exports.Place = Place
exports.placeProps = props
