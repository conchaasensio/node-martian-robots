function move(input) {
  const coordenates = input[0];
  const positions = [];
  for (let i = 1; i < input.length; i += 2) {
    positions.push(moveRobot(coordenates, input[i], input[i + 1]));
  }
  return positions;
}

function moveRobot(coordenates, initialPosition, instructions) {
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
    case 'L':
      return turnToLeft(position);
    case 'R':
      return turnToRight(position);
    case 'F':
      return moveForward(position);
  }
}

function turnToLeft(position) {
  const orientation = position[4];
  const leftRotations = { N: 'W', S: 'E', E: 'N', W: 'S' };

  return position.replace(orientation, leftRotations[orientation]);
}

function turnToRight(position) {
  const orientation = position[4];
  const rightRotations = { N: 'E', S: 'W', E: 'S', W: 'N' };

  return position.replace(orientation, rightRotations[orientation]);
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

function isLost(position, coordenates) {
  const splitPosition = position.split(' ');

  return (
    splitPosition[0] < 0 ||
    splitPosition[0] > coordenates[0] ||
    splitPosition[1] < 0 ||
    splitPosition[1] > coordenates[2]
  );
}

module.exports = { moveRobot, move };
