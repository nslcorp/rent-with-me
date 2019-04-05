const _ = require('lodash');

const { Place, placeProps } = require('../models/place');
const BaseController = require('./Base.controller');
const normalizeErrors = require('../helpers/mongoose').normalizeErrors;

class PlaceController extends BaseController {
  constructor() {
    super();
    this.create = [this._create];
    this.edit = [];
    this.delete = [];
    this.fetch = [];
    this.fetchAll = [this._fetchAll];
  }

  async _create(req, res) {
    const place = await new Place(_.pick(req.body, Object.keys(placeProps)));

    place
      .save()
      .then(data => res.json(data))
      .catch(err =>
        res.status(422).send({ errors: normalizeErrors(err.errors) })
      );
  }

  async _fetchAll(req, res) {
    const places = await Place.find();

    if (!places) return res.status(404).send('There is no any *places*');

    res.json(places);
  }
}

module.exports = new PlaceController();
