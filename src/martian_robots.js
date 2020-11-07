function move(coordenates, initialPosition, instructions) {
  const orientation = initialPosition[4];

  const leftRotations = {
    N: 'W',
    S: 'E',
    E: 'N',
    W: 'S',
  };
  if (orientation === 'N') {
    return initialPosition.replace(orientation, leftRotations['N']);
  } else if (orientation === 'W') {
    return initialPosition.replace(orientation, leftRotations['W']);
  } else if (orientation === 'S') {
    return initialPosition.replace(orientation, leftRotations['S']);
  } else if (orientation === 'E') {
    return initialPosition.replace(orientation, leftRotations['E']);
  }
}
module.exports = move;
