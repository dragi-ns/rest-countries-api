import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCountryByCode } from '../client';
import { StyledDetailsContainer } from '../styles/StyledDetailsContainer';
import { StyledInfo } from '../styles/StyledInfo';
import { StyledLink } from '../styles/StyledLink';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';
import CountryDetails from '../components/CountryDetails';

export default function Details() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;
    const fetchData = async () => {
      setIsLoading(true);
      const [data, error] = await getCountryByCode(code);
      if (isSubscribed) {
        if (data) {
          setCountry(data);
        } else {
          setCountry(null);
          console.error(error);
        }
        setIsLoading(false);
      }
    };

    fetchData();

    return () => (isSubscribed = false);
  }, [code]);

  useEffect(() => {
    if (!country || !country.borders) {
      return;
    }

    let isSubscribed = true;
    const fetchData = async () => {
      // https://zellwk.com/blog/async-await-in-loops/
      const responses = await Promise.all(
        country.borders.map(
          async (borderCode) => await getCountryByCode(borderCode)
        )
      );

      if (!isSubscribed) {
        return;
      }

      const borderCountriesData = [];
      for (const [data, error] of responses) {
        if (data) {
          borderCountriesData.push({ name: data.name.common, cca3: data.cca3 });
        } else {
          console.error(error);
        }
      }
      setBorderCountries(borderCountriesData);
    };

    fetchData();

    return () => (isSubscribed = false);
  }, [country]);

  return (
    <StyledDetailsContainer>
      {isLoading && <StyledInfo>Loading...</StyledInfo>}

      {!isLoading && !country && (
        <StyledInfo>There was an error. Please try again.</StyledInfo>
      )}

      {!isLoading && country && (
        <>
          <StyledLink to={`../`}>
            <ArrowLeft />
            Back
          </StyledLink>
          <CountryDetails
            flag={country.flags.svg}
            name={country.name.common}
            nativeName={Object.values(country.name.nativeName).map(
              (item) => item.common
            )}
            population={country.population}
            region={country.region}
            subregion={country.subregion}
            capital={country.capital && country.capital[0]}
            tld={country.tld}
            currencies={
              country.currencies &&
              Object.values(country.currencies).map((item) => item.name)
            }
            languages={Object.values(country.languages)}
            borders={borderCountries}
          />
        </>
      )}
    </StyledDetailsContainer>
  );
}
