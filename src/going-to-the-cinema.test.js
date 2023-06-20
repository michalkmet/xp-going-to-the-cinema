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
