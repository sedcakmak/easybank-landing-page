import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Public Sans', sans-serif;
}

html {
  --darkBlue: hsl(233, 26%, 24%);
  --limeGreen: hsl(136, 65%, 51%);
  --brightCyan: hsl(192, 70%, 51%);
  --grayishBlue: hsl(233, 8%, 62%);
  --lightGrayishBlue: hsl(220, 16%, 96%);
  --veryLightGray: hsl(0, 0%, 98%);
  --white: hsl(0, 0%, 100%);
  --greenToCyan: to right, var(--limeGreen), var(--brightCyan);
  --greenToCyanGradient: linear-gradient(to right, var(--limeGreen), var(--brightCyan));
  --fw-light: 300;
  --fw-reg: 400;
  --fw-bold: 700;
}

body {

}

h1,h2,h3 {
  font-weight: var(--fw-reg);
  line-height: 1.2;
}

p {
  color: var(--grayishBlue);
  font-size: 18px;
  line-height: 1.5;
}
`;

export default GlobalStyle;

// The designs were created to the following widths:

// - Mobile: 375px
// - Desktop: 1440px
