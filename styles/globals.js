import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
}



html, body {
  font-size: 62.5%;
  height: 100%;
}



body {
  font-family: 'Rubik', sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}


img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}


ul{
  list-style: none;
}


a{
  text-decoration: none;
  color: #000;
}




`;
