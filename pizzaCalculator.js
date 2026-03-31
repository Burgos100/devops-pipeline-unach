function calculateWater(flourWeight, hydrationPercentage) {
  return flourWeight * (hydrationPercentage / 100);
}

module.exports = calculateWater;