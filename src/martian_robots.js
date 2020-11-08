function move(coordenates, initialPosition, instructions) {
  let position = initialPosition;
  for (let instruction of instructions) {
    const nextPosition = moveOneInstruction(position, instruction);
    if (isLost(nextPosition, coordenates)) {
      return position + ' LOST';
    }
    position = nextPosition;
  }
  return position;
}

function moveOneInstruction(position, instruction) {
  switch (instruction) {
    case 'F':
      return moveForward(position);
    case 'R':
      return turnToRight(position);
    case 'L':
      return turnToLeft(position);
  }
}

function turnToLeft(position) {
  const orientation = position[4];

  return position.replace(orientation, turnOrientationToLeft(orientation));
}

function turnToRight(position) {
  const orientation = position[4];

  return position.replace(orientation, turnOrientationToRight(orientation));
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

function turnOrientationToLeft(orientation) {
  const leftRotations = {
    N: 'W',
    S: 'E',
    E: 'N',
    W: 'S',
  };
  return leftRotations[orientation];
}
function turnOrientationToRight(orientation) {
  const leftRotations = {
    N: 'E',
    S: 'W',
    E: 'S',
    W: 'N',
  };
  return leftRotations[orientation];
}

module.exports = move;
