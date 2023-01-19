import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  border: none;
  color: ${(props) => props.theme.colors.fg};
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.bgComp};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 6px, rgba(0, 0, 0, 0.23) 0px 0px 6px;
  box-shadow: ${(props) =>
    props.small
      ? 'rgba(0, 0, 0, 0.16) 0px 0px 3px'
      : 'rgba(0, 0, 0, 0.16) 0px 0px 6px'};
  font-size: ${(props) => (props.$small ? '0.8rem' : '1rem')};
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border-radius: 0.2rem;

  svg {
    fill: ${(props) => props.theme.colors.fg};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: ${(props) => (props.$small ? '0.9rem' : '1rem')};
    padding: 0.7rem 1.5rem;
  }
`;
