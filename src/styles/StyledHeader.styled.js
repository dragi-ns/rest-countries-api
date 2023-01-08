import styled from 'styled-components';
import Container from './Container.styled';

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.bgComp};
  box-shadow: 0px -10px 10px 3px #1c1c1c;

  h1 {
    font-size: 1.2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    h1 {
      font-size: 1.8rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 0.7rem 1.5rem;
    border-radius: 0.5rem;

    &:hover {
      background-color: ${(props) => props.theme.colors.bg};
    }

    svg {
      fill: ${(props) => props.theme.colors.fg};
    }
  }
`;

export const StyledHeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.8rem;
`;
