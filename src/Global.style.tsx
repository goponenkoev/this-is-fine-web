import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

 :root {
    --Main900: #504457;
    --Main800: #5e5066;
    --Main700: #8f28a8;
    --Main600: #af8dc2;
    --Main500: #c363db;
    --Main400: #d495e6;
    --Main300: #000000;
    --Main200: #f7dbff;
    --Main100: #fbedff;
    --Main50: #fefaff;
 }
 
 html, body, #root {
    height: 100%;
 }
  
 body, input, button {
    font: 14px 'Roboto', sans-serif;
 }
`