import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 1.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: 540px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 720px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 960px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    max-width: 1140px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xxl}) {
    max-width: 1320px;
  }
`;
