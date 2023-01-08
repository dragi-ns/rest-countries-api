import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 14px;
}

body {
  font-family: 'Nunito Sans', sans-serif;
  color: ${(props) => props.theme.colors.fg};
  background-color: ${(props) => props.theme.colors.bg};
}

button {
  font: inherit;
  color: inherit;
}
`;
