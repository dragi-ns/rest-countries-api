export async function getAllCountries() {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export async function getCountriesByName(name) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export async function getCountriesByRegion(region) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export async function getCountryByCode(code) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${code}`
    );
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return [data[0], null];
  } catch (error) {
    return [null, error];
  }
}
