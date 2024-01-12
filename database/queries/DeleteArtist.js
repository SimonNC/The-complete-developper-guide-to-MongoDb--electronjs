/* eslint-disable quotes */
const Artist = require("../models/artist");

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = _id => {
  return Artist.findByIdAndDelete(_id)
    .then(artist => {
      if (!artist) {
        return Promise.reject("No artist found.");
      }
      return artist;
    })
    .catch(err => Promise.reject(err));
};
