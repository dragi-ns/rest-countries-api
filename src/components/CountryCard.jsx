import PropTypes from 'prop-types';
import {
  StyledCountryCard,
  StyledCountryCardBody,
} from '../styles/StyledCountryCard.styled';

export default function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}) {
  return (
    <StyledCountryCard>
      <div>
        <img style={{ maxWidth: '100%' }} src={flag} alt={`${name}'s flag`} />
      </div>
      <StyledCountryCardBody>
        <h2>{name}</h2>
        <ul>
          <li>
            <span>Population: </span>
            {population.toLocaleString()}
          </li>
          <li>
            <span>Region: </span>
            {region}
          </li>
          {capital && (
            <li>
              <span>Capital: </span>
              {capital}
            </li>
          )}
        </ul>
      </StyledCountryCardBody>
    </StyledCountryCard>
  );
}

CountryCard.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string,
};
