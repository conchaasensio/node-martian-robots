function move(coordenates, initialPosition, instructions) {
  const orientation = initialPosition[4];
  if (instructions === 'R') {
    return initialPosition.replace(orientation, turnToRight(orientation));
  }

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
function turnToRight(orientation) {
  const leftRotations = {
    N: 'E',
    S: 'W',
    E: 'S',
    W: 'N',
  };
  return leftRotations[orientation];
}
module.exports = move;
