import styled from 'styled-components';

export const StyledCountryCards = styled.div`
  display: grid;
  grid-template-columns: 275px;
  justify-content: center;
  gap: 3rem;
  margin: 1.5rem 2.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 1.5rem 0;
    gap: 5rem;
  }
`;
