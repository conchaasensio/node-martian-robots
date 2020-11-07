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
