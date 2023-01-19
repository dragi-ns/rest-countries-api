import PropTypes from 'prop-types';
import { StyledLink } from '../styles/StyledLink';
import { StyledCountryBorders } from '../styles/StyledCountryBorders';

export default function CountryBorders({ borders }) {
  return (
    <StyledCountryBorders>
      <h3>Border Countries:</h3>
      <ul>
        {borders.map((border) => (
          <li key={border.cca3}>
            <StyledLink $small key={border.cca3} to={`../${border.cca3}`}>
              {border.name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledCountryBorders>
  );
}

CountryBorders.propTypes = {
  borders: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      cca3: PropTypes.string,
    })
  ),
};
