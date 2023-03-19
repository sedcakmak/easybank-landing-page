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
  --greenToCyanGradient: linear-gradient(to right, var(--limeGreen), var(--brightCyan));
  --lightGreenToCyanGradient: linear-gradient(to right, #7BDF7B, #86D6EA);
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

h4 {
  font-weight: var(--fw-light);
  font-size: 16px;
  &:hover {
    color:var(--limeGreen);
    cursor: pointer;
  }
}

p {
  color: var(--grayishBlue);
  font-size: 18px;
  line-height: 1.5;
}

.article-author {
  font-size: 12px;
  margin-bottom: 1rem;
}

.article-text {
  font-size: 14px;
  margin-top: 1rem;
}

.article-img {
  width: 200px;
  height: 133px;
    @media (max-width: 800px) {
      width:100%;
  }
}

.social-media path{
  &:hover{
    fill: var(--limeGreen);
  }
}
`;

// .Overlay {

//    position: fixed; /* Sit on top of the page content */
//    display: none; /* Hidden by default */
//    width: 100%; /* Full width (cover the whole page) */
//    height: 100%; /* Full height (cover the whole page) */
//    top: 0;
//    left: 0;
//    right: 0;
//    bottom: 0;
//    background-color: rgba(0, 0, 0, 1); /* Black background with opacity */
//    z-index: -99; /* Specify a stack order in case you're using a different order for other elements */
//   cursor: pointer; /* Add a pointer on hover */
// }

export default GlobalStyle;

// The designs were created to the following widths:

// - Mobile: 375px
// - Desktop: 1440px
