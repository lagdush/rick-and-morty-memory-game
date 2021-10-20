import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*, *:before, *:after{
   box-sizing: border-box;
   padding: 0;
   margin: 0;
}
html {
   background-color: ${(props) => props.theme.colors.background};
}
body {
   font-family: 'Roboto', sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
#root{
   margin:0 auto;
}
`;
export default GlobalStyles;
