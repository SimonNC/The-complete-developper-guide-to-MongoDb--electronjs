/* eslint-disable quotes */
// Todo: Create Artist Model
const mongoose = require("mongoose");
const Album = require("./album");

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  yearsActive: {
    type: Number,
  },
  image: {
    type: String,
  },
  genre: {
    type: String,
  },
  website: {
    type: String,
  },
  netWorth: {
    type: Number,
  },
  labelName: {
    type: String,
  },
  retired: {
    type: Boolean,
  },
  albums: {
    type: [Album],
  },
});

const Artist = mongoose.model("artist", ArtistSchema);
module.exports = Artist;
