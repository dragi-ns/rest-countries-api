import styled from 'styled-components';

export const StyledCountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 3rem;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: row;
    gap: 5rem;
    margin-top: 4rem;

    & > div {
      flex: 1;
    }
  }
`;

export const StyledCountryDetailsLeft = styled.div`
  align-self: flex-start;
  display: flex;

  img {
    max-width: 100%;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }
`;

export const StyledCountryDetailsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    gap: 2rem;

    h2 {
      font-size: 2rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    align-self: center;
  }
`;

export const StyledCountryDetailsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 0.75rem;
  }

  li {
    display: flex;
    gap: 0.35rem;
  }

  li > span:first-of-type {
    font-weight: 600;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;
