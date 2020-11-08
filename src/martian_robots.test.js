const move = require('./martian_robots');

describe('robot turns left', () => {
  test('robot turns left when the orientation is North', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 N', 'L');

    //assert
    expect(position).toBe('1 1 W');
  });

  test('robot turns left when the orientation is West', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 W', 'L');

    //assert
    expect(position).toBe('1 1 S');
  });

  test('robot turns left when the orientation is South', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 S', 'L');

    //assert
    expect(position).toBe('1 1 E');
  });

  test('robot turns left when the orientation is East', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 E', 'L');

    //assert
    expect(position).toBe('1 1 N');
  });

  test('robot turns left when the orientation is North', () => {
    //arrange

    //act
    const position = move('5 3', '0 0 N', 'L');

    //assert
    expect(position).toBe('0 0 W');
  });
});

describe('robot turns right', () => {
  test('robot turns right when the orientation is North', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 N', 'R');

    //assert
    expect(position).toBe('1 1 E');
  });
  test('robot turns right when the orientation is East', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 E', 'R');

    //assert
    expect(position).toBe('1 1 S');
  });
  test('robot turns right when the orientation is South', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 S', 'R');

    //assert
    expect(position).toBe('1 1 W');
  });
  test('robot turns right when the orientation is West', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 W', 'R');

    //assert
    expect(position).toBe('1 1 N');
  });
});

describe('robot moves forward', () => {
  test('robot moves forward when the orientation is North', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 N', 'F');

    //assert
    expect(position).toBe('1 2 N');
  });

  test('robot moves forward when the orientation is East', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 E', 'F');

    //assert
    expect(position).toBe('2 1 E');
  });

  test('robot moves forward when the orientation is South', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 S', 'F');

    //assert
    expect(position).toBe('1 0 S');
  });

  test('robot moves forward when the orientation is West', () => {
    //arrange

    //act
    const position = move('5 3', '1 1 W', 'F');

    //assert
    expect(position).toBe('0 1 W');
  });
  test('robot moves forward when the orientation is North', () => {
    //arrange

    //act
    const position = move('5 3', '0 0 N', 'F');

    //assert
    expect(position).toBe('0 1 N');
  });
});

describe('robot process more than one instruction', () => {
  test('robot moves forward twice when the orientation is North', () => {
    //arrange

    //act
    const position = move('5 3', '0 0 N', 'FF');

    //assert
    expect(position).toBe('0 2 N');
  });

  test('robot turns right twice when the orientation is North', () => {
    //arrange

    //act
    const position = move('5 3', '0 0 N', 'RR');

    //assert
    expect(position).toBe('0 0 S');
  });

  test('robot turns right and moves forward when the orientation is North', () => {
    //arrange

    //act
    const position = move('5 3', '0 0 N', 'RF');

    //assert
    expect(position).toBe('1 0 E');
  });
});

describe('world bounds', () => {
  test('can move up to North boundary', () => {
    //arrange

    //act
    const position = move('5 4', '0 3 N', 'F');

    //assert
    expect(position).toBe('0 4 N');
  });
  test('robot is lost when exceedes North boundary', () => {
    //arrange

    //act
    const position = move('5 3', '0 3 N', 'F');

    //assert
    expect(position).toBe('0 3 N LOST');
  });

  test('robot is lost when exceedes South boundary', () => {
    //arrange

    //act
    const position = move('5 4', '1 0 S', 'F');

    //assert
    expect(position).toBe('1 0 S LOST');
  });

  test('robot is lost when exceedes East boundary', () => {
    //arrange

    //act
    const position = move('5 4', '5 0 E', 'F');

    //assert
    expect(position).toBe('5 0 E LOST');
  });
  test('robot is lost when exceedes West boundary', () => {
    //arrange

    //act
    const position = move('5 4', '0 0 W', 'F');

    //assert
    expect(position).toBe('0 0 W LOST');
  });

  test('robot cannot move forward once it is lost', () => {
    //arrange

    //act
    const position = move('5 4', '0 0 W LOST', 'F');

    //assert
    expect(position).toBe('0 0 W LOST');
  });
});
