import styled from 'styled-components';

export const StyledHomeControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 3rem;
  margin: 1rem 0 2.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin: 2.5rem 0 4rem;
  }
`;
