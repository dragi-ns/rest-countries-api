import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  getAllCountries,
  getCountriesByRegion,
  getCountriesByName,
} from '../client';
import { StyledContainer } from '../styles/StyledContainer';
import { StyledHomeControls } from '../styles/StyledHomeControls';
import { StyledInfo } from '../styles/StyledInfo';
import CountryCards from '../components/CountryCards';
import SearchInput from '../components/SearchInput';
import RegionDropdown from '../components/RegionDropdown';

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get('search')?.trim();
    const regionValue = searchParams.get('region')?.trim();
    if (searchValue && regionValue) {
      // API doesn't support search and region at the same time
      // This probably means that the user was playing with the URL...
      setSearchParams({});
      return;
    }

    // https://devtrium.com/posts/async-functions-useeffect
    let isSubscribed = true;
    const fetchData = async () => {
      setIsLoading(true);
      let data = null,
        error = null;
      if (searchValue) {
        [data, error] = await getCountriesByName(searchValue);
      } else if (regionValue) {
        [data, error] = await getCountriesByRegion(regionValue);
      } else {
        [data, error] = await getAllCountries();
      }
      if (isSubscribed) {
        if (data) {
          setCountries(data);
        } else {
          setCountries([]);
          console.error(error);
        }
        setIsLoading(false);
      }
    };

    fetchData();

    return () => (isSubscribed = false);
  }, [searchParams]);

  return (
    <StyledContainer>
      <StyledHomeControls>
        <SearchInput />
        <RegionDropdown />
      </StyledHomeControls>
      {isLoading && <StyledInfo>Loading...</StyledInfo>}

      {!isLoading && countries.length < 1 && (
        <StyledInfo>There are no results.</StyledInfo>
      )}

      {!isLoading && countries.length > 0 && (
        <CountryCards countries={countries} />
      )}
    </StyledContainer>
  );
}
