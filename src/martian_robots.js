function move(coordenates, initialPosition, instructions) {
  const orientation = initialPosition[4];

  return initialPosition.replace(orientation, turnToLeft(orientation));
}

function turnToLeft(orientation) {
  const leftRotations = {
    N: 'W',
    S: 'E',
    E: 'N',
    W: 'S',
  };
  return leftRotations[orientation];
}
module.exports = move;
