function move(coordenates, initialPosition, instructions) {
  const orientation = initialPosition[4];
  if (instructions === 'F') {
    return moveFroward(initialPosition);
  }

  if (instructions === 'R') {
    return initialPosition.replace(orientation, turnToRight(orientation));
  }

  return initialPosition.replace(orientation, turnToLeft(orientation));
}

function moveFroward(position) {
  const orientation = position[4];

  if (orientation === 'N') {
    return position[0] + ' ' + (parseInt(position[2]) + 1) + ' ' + orientation;
  } else if (orientation === 'S') {
    return position[0] + ' ' + (parseInt(position[2]) - 1) + ' ' + orientation;
  } else if (orientation === 'E') {
    return parseInt(position[0]) + 1 + ' ' + position[2] + ' ' + orientation;
  } else if (orientation === 'W') {
    return parseInt(position[0]) - 1 + ' ' + position[2] + ' ' + orientation;
  }
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
