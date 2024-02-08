const movie = require('./going-to-the-cinema');

describe('movie', () => {
  it('should return 1 for movie(0, 15, 0.9)', () => {
    expect(movie(0, 15, 0.9)).toBe(1);
  });
  it('should return 2 for movie(3, 15, 0.9)', () => {
    expect(movie(3, 15, 0.9)).toBe(2);
  });
  it('should return 3 for movie(6, 15, 0.9)', () => {
    expect(movie(6, 15, 0.9)).toBe(3);
  });
  it('should return 43 for movie(500, 15, 0.9)', () => {
    expect(movie(500, 15, 0.9)).toBe(43);
  });

  it('should return 24 for movie(100, 10, 0.95)', () => {
    expect(movie(100, 10, 0.95)).toBe(24);
  });
});

describe('User story 2 - failing examples', () => {
  it('should return 2 for movie(0, 10, 0.95)', () => {
    expect(movie(0, 10, 0.95)).toBe(2);
  });
  it('should return 4062 for movie(194970, 48, 0.02)', () => {
    expect(movie(194970, 48, 0.02)).toBe(4062);
  });
  it('should return 2060 for movie(30880, 15, 0.42)', () => {
    expect(movie(30880, 15, 0.42)).toBe(2060);
  });
  it('should return 1989 for movie(61609, 31, 0.48)', () => {
    expect(movie(61609, 31, 0.48)).toBe(1989);
  });
  it('should return 606 for movie(16964, 28, 0.08)', () => {
    expect(movie(16964, 28, 0.08)).toBe(606);
  });
  it('should return 1465 for movie(58566, 40, 0.27)', () => {
    expect(movie(58566, 40, 0.27)).toBe(1465);
  });
  it('should return 1324 for movie(1324, 29, 0.49)', () => {
    expect(movie(38342, 29, 0.49)).toBe(1324);
  });
  it('should return 3046 for movie(109640, 36, 0.17)', () => {
    expect(movie(109640, 36, 0.17)).toBe(3046);
  });
  it('should return 1889 for movie(79328, 42, 0.1)', () => {
    expect(movie(79328, 42, 0.1)).toBe(1889);
  });
});
