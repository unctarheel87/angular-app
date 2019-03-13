const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new Schema({
  "Brewery Name": {
    type: String,
    trim: true,
    required: "brewery name is required"
  },
  "Beer Name": {
    type: String,
    trim: true,
    required: "beer name is required"
  },
  "Beer Style": {
    type: String,
    trim: true
  },
  "ABV": {
    type: String,
    trim: true,
    required: "ABV is required"
  },
  "IBU": {
    type: String,
    trim: true,
    required: "IBU is required"
  },
  "currentDraft": {
    type: Boolean,
    default: false,
    required: true
  }
});

module.exports = mongoose.model('Beer', beerSchema);
