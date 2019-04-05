const _ = require('lodash');

const { Hotel, hotelProps } = require('../models/hotel');
const BaseController = require('./Base.controller');
const normalizeErrors = require('../helpers/mongoose').normalizeErrors;

class HotelController extends BaseController {
  constructor() {
    super();
    this.create = [this._create];
    this.edit = [];
    this.delete = [];
    this.fetch = [];
    this.fetchAll = [this._fetchAll];
    this.getAllRooms = [this._getAllRooms]
  }

  async _create(req, res) {
    const hotel = await new Hotel(_.pick(req.body, Object.keys(hotelProps)));

    hotel
      .save()
      .then(data => res.json(data))
      .catch(err =>
        res.status(422).send({ errors: normalizeErrors(err.errors) })
      );
  }

  async _fetchAll(req, res) {
    const hotels = await Hotel.find();

    if (!hotels) return res.status(404).send('There is no any *places*');

    res.json(hotels);
  }

  async _getAllRooms(req, res) {
    const hotels = await Hotel.find();

    if (!hotels) return res.status(404).send('There is no any *places*');

    res.json(hotels);
  }


}

module.exports = new HotelController();
