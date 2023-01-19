import PropTypes from 'prop-types';
import CountryBorders from './CountryBorders';
import {
  StyledCountryDetails,
  StyledCountryDetailsRight,
  StyledCountryDetailsLeft,
  StyledCountryDetailsInfoContainer,
} from '../styles/StyledCountryDetails';

export default function CountryDetails(props) {
  return (
    <StyledCountryDetails>
      <StyledCountryDetailsLeft>
        <img src={props.flag} alt={`${props.name} flag`} />
      </StyledCountryDetailsLeft>
      <StyledCountryDetailsRight>
        <h2>{props.name}</h2>
        <StyledCountryDetailsInfoContainer>
          <ul>
            <li>
              <span>Native Name:</span>
              <span>{props.nativeName.join(', ')}</span>
            </li>
            <li>
              <span>Population:</span>
              <span>{props.population.toLocaleString()}</span>
            </li>
            <li>
              <span>Region:</span>
              <span>{props.region}</span>
            </li>
            {props.subregion && (
              <li>
                <span>Subregion:</span>
                <span>{props.subregion}</span>
              </li>
            )}
            {props.capital && (
              <li>
                <span>Capital:</span>
                <span>{props.capital}</span>
              </li>
            )}
          </ul>
          <ul>
            {props.tld && props.tld.length > 0 && (
              <li>
                <span>Top Level Domain:</span>
                <span>{props.tld.join(', ')}</span>
              </li>
            )}
            {props.currencies && (
              <li>
                <span>Currencies:</span>
                <span>{props.currencies.join(', ')}</span>
              </li>
            )}
            <li>
              <span>Languages:</span>
              <span>{props.languages.join(', ')}</span>
            </li>
          </ul>
        </StyledCountryDetailsInfoContainer>
        {props.borders.length > 0 && <CountryBorders borders={props.borders} />}
      </StyledCountryDetailsRight>
    </StyledCountryDetails>
  );
}

CountryDetails.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nativeName: PropTypes.arrayOf(PropTypes.string).isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string,
  capital: PropTypes.string,
  tld: PropTypes.arrayOf(PropTypes.string),
  currencies: PropTypes.arrayOf(PropTypes.string),
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  borders: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      cca3: PropTypes.string,
    })
  ),
};
