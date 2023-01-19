import styled from 'styled-components';
import { StyledContainer } from '../styles/StyledContainer';

export const StyledDetailsContainer = styled(StyledContainer)`
  padding: 3rem 2.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 4rem 1.5rem;
  }
`;
