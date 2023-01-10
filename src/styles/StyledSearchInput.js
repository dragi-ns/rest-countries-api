import styled from 'styled-components';

export const StyledSearchInputContainer = styled.div`
  width: 100%;
  max-width: 500px;
  position: relative;
`;

// prettier-ignore
export const StyledSearchInput = styled.input`
  width: 100%;
  border: none;
  color: ${(props) => props.theme.colors.fgInput};
  background-color: ${(props) => props.theme.colors.bgComp};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  border-radius: 0.5rem;
  font-weight: 600;
  padding: 1.5rem calc(3.42rem + 1.5rem) 1.5rem calc(3.42rem + 1.5rem);
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${(props) => props.theme.colors.fgInput}' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 24px;

  &:focus,
  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    opacity: 1;
  }
`;

export const StyledSearchInputClear = styled.span`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);

  svg {
    fill: ${(props) => props.theme.colors.fgInput};
  }
`;
