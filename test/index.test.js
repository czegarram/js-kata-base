const MathLib = require('../src');

describe('MathLib', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      const mathLib = new MathLib();
      const result = mathLib.add(1, 2);
      expect(result).toBe(3);
    });
  });
});
