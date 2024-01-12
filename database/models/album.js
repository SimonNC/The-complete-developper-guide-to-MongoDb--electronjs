/* eslint-disable quotes */
// Todo: create Album Schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  date: {
    type: Date,
    required: [true, "Date is required"],
  },
  copiesSold: {
    type: Number,
    required: [true, "copiesSold is required"],
  },
  image: {
    type: String,
    required: [true, "image is required"],
  },
  revenue: {
    type: Number,
    required: [true, "Revenue is required"],
  },
});

module.exports = AlbumSchema;
