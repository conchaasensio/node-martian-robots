function move(coordenates, initialPosition, instructions) {
  const orientation = initialPosition[4];
  if (instructions === 'F' && orientation === 'N') {
    return '1 ' + (parseInt(initialPosition[2]) + 1) + ' N';
  } else if (instructions === 'F' && orientation === 'E') {
    return parseInt(initialPosition[0]) + 1 + ' 1' + ' E';
  } else if (instructions === 'F' && orientation === 'S') {
    return '1 ' + (parseInt(initialPosition[2]) - 1) + ' S';
  } else if (instructions === 'F' && orientation === 'W') {
    return parseInt(initialPosition[0]) - 1 + ' 1' + ' W';
  } else if (instructions === 'R') {
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
