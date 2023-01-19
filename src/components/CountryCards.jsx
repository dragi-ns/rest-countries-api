import PropTypes from 'prop-types';
import CountryCard from './CountryCard';
import { StyledCountryCards } from '../styles/StyledCountryCards';
import { Link } from 'react-router-dom';

export default function CountryCards({ countries }) {
  return (
    <StyledCountryCards>
      {countries.map((country) => {
        return (
          <Link key={country.cca3} to={`${country.cca3}`}>
            <CountryCard
              flag={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital && country.capital[0]}
            />
          </Link>
        );
      })}
    </StyledCountryCards>
  );
}

CountryCards.propTypes = {
  countries: PropTypes.array.isRequired,
};
