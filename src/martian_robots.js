function move(coordenates, initialPosition, instructions) {
  let position = initialPosition;
  for (let instruction of instructions) {
    position = moveOneInstruction(coordenates, position, instruction);
  }
  return position;
}

function moveOneInstruction(coordenates, position, instruction) {
  const orientation = position[4];
  if (position.endsWith('LOST')) {
    return position;
  }

  if (instruction === 'F') {
    const nextPosition = moveForward(position);
    if (isLost(nextPosition, coordenates)) {
      return position + ' LOST';
    }

    return nextPosition;
  }
  if (instruction === 'R') {
    return position.replace(orientation, turnToRight(orientation));
  }
  if (instruction === 'L') {
    return position.replace(orientation, turnToLeft(orientation));
  }
}

function isLost(position, coordenates) {
  const splitPosition = position.split(' ');

  return (
    splitPosition[0] < 0 ||
    splitPosition[0] > coordenates[0] ||
    splitPosition[1] < 0 ||
    splitPosition[1] > coordenates[2]
  );
}

function moveForward(position) {
  const movements = {
    N: [0, 1],
    S: [0, -1],
    E: [1, 0],
    W: [-1, 0],
  };

  const orientation = position[4];
  const movement = movements[orientation];

  const x = parseInt(position[0]) + movement[0];
  const y = parseInt(position[2]) + movement[1];
  return `${x} ${y} ${orientation}`;
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
