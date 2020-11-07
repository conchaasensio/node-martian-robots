function move(coordenates, initialPosition, instructions) {
  if (initialPosition[4] === 'N') {
    return initialPosition.replace('N', 'W');
  } else if (initialPosition[4] === 'W') {
    return initialPosition.replace('W', 'S');
  } else if (initialPosition[4] === 'S') {
    return initialPosition.replace('S', 'E');
  } else if (initialPosition[4] === 'E') {
    return initialPosition.replace('E', 'N');
  }
}
module.exports = move;
