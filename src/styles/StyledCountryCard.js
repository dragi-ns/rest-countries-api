import styled from 'styled-components';

export const StyledCountryCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  min-height: 100%;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.bgComp};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  ul {
    list-style: none;
  }

  img {
    min-width: 100%;
    width: 100%;
    vertical-align: middle;
    height: 175px;
  }
`;

export const StyledCountryCardBody = styled.div`
  position: relative;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.08) -5px -5px 12px;
  flex-grow: 1;
  padding: 1.25rem 1.5rem 2.5rem;

  h2 {
    font-size: 1.2rem;
    margin-block: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  span:first-of-type {
    font-weight: 600;
  }
`;
