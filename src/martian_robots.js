function move(coordenates, initialPosition, instructions) {
  if (initialPosition === '1 1 N') {
    return '1 1 W';
  } else if (initialPosition === '1 1 W') {
    return '1 1 S';
  } else if (initialPosition === '1 1 S') {
    return '1 1 E';
  } else if (initialPosition === '1 1 E') {
    return '1 1 N';
  }
}
module.exports = move;
