function move(coordenates, initialPosition, instructions) {
  let position = initialPosition;
  for (let instruction of instructions) {
    position = moveOneInstruction(position, instruction);
  }
  return position;
}

function moveOneInstruction(position, instruction) {
  const orientation = position[4];
  if (instruction === 'F') {
    return moveFroward(position);
  }
  if (instruction === 'R') {
    return position.replace(orientation, turnToRight(orientation));
  }
  if (instruction === 'L') {
    return position.replace(orientation, turnToLeft(orientation));
  }
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
