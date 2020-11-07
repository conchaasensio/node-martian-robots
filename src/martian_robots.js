function move(coordenates, initialPosition, instructions) {
  const orientation = initialPosition[4];
  if (orientation === 'N') {
    return initialPosition.replace('N', 'W');
  } else if (orientation === 'W') {
    return initialPosition.replace('W', 'S');
  } else if (orientation === 'S') {
    return initialPosition.replace('S', 'E');
  } else if (orientation === 'E') {
    return initialPosition.replace('E', 'N');
  }
}
module.exports = move;
