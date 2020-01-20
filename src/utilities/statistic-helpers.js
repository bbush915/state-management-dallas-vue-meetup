export function getMaxLevelValue(baseValue, growthRate) {
  const appliedGrowthRate = Math.floor(growthRate * 1.14);
  const growthValue = Math.floor(39 * (appliedGrowthRate / 100));

  return baseValue + growthValue;
}
