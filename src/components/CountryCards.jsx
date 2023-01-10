import PropTypes from 'prop-types';
import CountryCard from './CountryCard';
import { StyledCountryCards } from '../styles/StyledCountryCards';

export default function CountryCards({ countries }) {
  return (
    <StyledCountryCards>
      {countries.map((country, index) => {
        return (
          <CountryCard
            key={index}
            flag={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital && country.capital[0]}
          />
        );
      })}
    </StyledCountryCards>
  );
}

CountryCards.propTypes = {
  countries: PropTypes.array.isRequired,
};
