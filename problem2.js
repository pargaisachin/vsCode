function problem2(inventory)
{
	if(!inventory)
	{
		return []
	}
  if (!inventory) return {};
  const lastCar = inventory[inventory.length - 1];
  return lastCar;
};

module.exports = problem2;



