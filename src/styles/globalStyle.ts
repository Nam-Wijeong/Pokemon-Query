import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing: border-box;
  font-family: 'Gill Sans';
}
button {
  border: none;
  cursor: pointer;
  background-color: transparent;
}
input {
  border: none;
}
input:focus {
  outline: none;
}
a {
  text-decoration: none;
}
`;

export default GlobalStyles;
