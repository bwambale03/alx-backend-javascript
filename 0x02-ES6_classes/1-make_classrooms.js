ClassRoom = require('./0-classroom');

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */
function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
module.exports = initializeRooms;
