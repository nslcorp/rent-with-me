const _ = require('lodash');

const { Room, roomProps } = require('../models/room');
const { Hotel } = require('../models/hotel');
const BaseController = require('./Base.controller');
const normalizeErrors = require('../helpers/mongoose').normalizeErrors;

class RoomController extends BaseController {
  constructor() {
    super();
    this.create = [this._create];
    this.edit = [];
    this.delete = [];
    this.fetch = [this._fetch];
    this.fetchAll = [this._fetchAll];
  }

  async _create(req, res) {
    const roomModel = await new Room(_.pick(req.body, Object.keys(roomProps)));


    try {
      const room = await roomModel.save();
      
      const hotel = await Hotel.findById(req.body.hotelId).exec()
      hotel.rooms.push(room._id)
      hotel.save()

      res.json(room)
    } catch (error) {
      res.status(422).send({ errors: normalizeErrors(error.errors) })
    }
    
  }

  async _fetch(req, res) {
    const id = req.param.id;
    const rooms = await Room.find({hotel: id});

    if (!rooms) return res.status(404).send('There is no any *rooms*');

    res.json(rooms);
  }

  async _fetchAll(req, res) {
    const rooms = await Room.find();

    if (!rooms) return res.status(404).send('There is no any *places*');

    res.json(rooms);
  }
  
  
}

module.exports = new RoomController();
