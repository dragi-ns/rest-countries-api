import styled, { css } from 'styled-components';

export const StyledRegionDropdown = styled.div`
  width: 250px;
  position: relative;
  user-select: none;
  z-index: 100;
`;

export const StyledRegionDropdownTrigger = styled.div`
  padding: 1.5rem 1.75rem;
  font-weight: 600;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.bgComp};
  display: flex;
  justify-content: space-between;

  svg {
    width: 16px;
    fill: ${(props) => props.theme.colors.fg};
  }
`;

export const StyledRegionDropdownContent = styled.ul`
  list-style: none;
  position: absolute;
  width: 100%;
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.colors.bgComp};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const StyledRegionDropdownItem = styled.li`
  padding: 1rem 1.75rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.bg};
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: ${props.theme.colors.bg};
    `}
`;
