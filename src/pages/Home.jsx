import { useState, useEffect } from 'react';
import { StyledContainer } from '../styles/StyledContainer';
import { StyledHomeControls } from '../styles/StyledHomeControls';
import { StyledInfo } from '../styles/StyledInfo';
import CountryCards from '../components/CountryCards';
import SearchInput from '../components/SearchInput.jsx';
import RegionDropdown from '../components/RegionDropdown';
import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    setCountries(null);

    const searchValue = searchParams.get('search')?.trim();
    const regionValue = searchParams.get('region')?.trim();
    if (searchValue && regionValue) {
      // API doesn't support search and region at the same time
      // This probably means that the user was playing with the URL...
      setSearchParams({});
      return;
    }

    if (searchValue) {
      getCountriesByName(searchValue);
    } else if (regionValue) {
      getCountriesByRegion(regionValue);
    } else {
      getAllCountries();
    }
  }, [searchParams]);

  const getAllCountries = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      setCountries([]);
      return;
    }
    const data = await response.json();
    setCountries(data);
  };

  const getCountriesByName = async (name) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      setCountries([]);
      return;
    }
    const data = await response.json();
    setCountries(data);
  };

  const getCountriesByRegion = async (region) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    if (!response.ok) {
      setCountries([]);
      return;
    }
    const data = await response.json();
    setCountries(data);
  };

  return (
    <StyledContainer>
      <StyledHomeControls>
        <SearchInput />
        <RegionDropdown />
      </StyledHomeControls>
      {!countries && <StyledInfo>Loading...</StyledInfo>}

      {countries && countries.length < 1 && (
        <StyledInfo>There are no results.</StyledInfo>
      )}

      {countries && countries.length > 0 && (
        <CountryCards countries={countries} />
      )}
    </StyledContainer>
  );
}
