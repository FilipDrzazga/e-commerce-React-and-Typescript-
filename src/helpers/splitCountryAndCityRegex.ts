export const splitCountryAndCityRegex = (stringToSplit: string): { country: string; city: string } | undefined => {
  const regex = /\n·\n/;
  const split = stringToSplit.split(regex);
  const country = split[0];
  const city = split[1];
  if (country && city) {
    return { country: country, city: city };
  }
};
