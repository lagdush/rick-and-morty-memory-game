import 'styled-components';
import {theme} from './src/globalTheme/theme';


declare module 'styled-components' {
   type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}