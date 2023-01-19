import styled from 'styled-components';

export const StyledCountryCards = styled.div`
  display: grid;
  grid-template-columns: 275px;
  justify-content: center;
  gap: 3rem;
  margin: 1.5rem 2.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-content: start;
    margin: 1.5rem 0;
    gap: 5rem;
  }
`;
