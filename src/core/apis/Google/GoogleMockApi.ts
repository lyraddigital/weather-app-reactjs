const cities = ['Sydney', 'New York', 'London'];

export const getCitiesByName = (cityName: string): Array<string> => {
  const filterExpr = new RegExp(cityName, 'i');
  return cities.filter((c) => filterExpr.test(c));
};
