const calculateWater = require('./pizzaCalculator');

test('Calcula el agua para 1000g de harina al 65% de hidratación', () => {
  expect(calculateWater(1000, 65)).toBe(650);
});

test('Calcula el agua para 500g de harina al 70% de hidratación', () => {
  expect(calculateWater(500, 70)).toBe(350);
});