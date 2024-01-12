/* eslint-disable quotes */
// Todo: Create Artist Model
const mongoose = require("mongoose");
const Album = require("./album");

const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  yearsActive: {
    type: Number,
    required: [true, "yearsActive is required"],
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
  genre: {
    type: String,
    required: [true, "genre is required"],
  },
  website: {
    type: String,
    required: [true, "website is required"],
  },
  netWorth: {
    type: Number,
    required: [true, "netWorth is required"],
  },
  labelName: {
    type: String,
    required: [true, "labelName is required"],
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
