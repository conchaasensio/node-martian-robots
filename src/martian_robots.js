function move(coordenates, initialPosition, instructions) {
  const orientation = initialPosition[4];
  if (instructions === 'F') {
    return moveFroward(initialPosition);
  }

  if (instructions === 'FF' && orientation === 'N') {
    return (
      initialPosition[0] +
      ' ' +
      (parseInt(initialPosition[2]) + 2) +
      ' ' +
      orientation
    );
  }

  if (instructions === 'R') {
    return initialPosition.replace(orientation, turnToRight(orientation));
  }

  return initialPosition.replace(orientation, turnToLeft(orientation));
}

function moveFroward(position) {
  const orientation = position[4];

  switch (orientation) {
    case 'N':
      return (
        position[0] + ' ' + (parseInt(position[2]) + 1) + ' ' + orientation
      );
      break;

    case 'S':
      return (
        position[0] + ' ' + (parseInt(position[2]) - 1) + ' ' + orientation
      );
      break;

    case 'E':
      return parseInt(position[0]) + 1 + ' ' + position[2] + ' ' + orientation;
      break;

    case 'W':
      return parseInt(position[0]) - 1 + ' ' + position[2] + ' ' + orientation;
      break;

    default:
      return 'Error. Orientacion no valida';
      break;
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
