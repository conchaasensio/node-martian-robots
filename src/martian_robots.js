function move(coordenates, initialPosition, instructions) {
  const orientation = initialPosition[4];

  const leftRotations = {
    N: 'W',
    S: 'E',
    E: 'N',
    W: 'S',
  };

  return initialPosition.replace(orientation, leftRotations[orientation]);
}
module.exports = move;
