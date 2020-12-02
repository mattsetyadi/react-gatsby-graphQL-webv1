import { createGlobalStyle } from "styled-components"
import PermanentMarkerTTF from "../../assets/fonts/PermanentMarker-Regular.ttf"

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Permanent Marker';
    src: url(${PermanentMarkerTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
    *{
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
