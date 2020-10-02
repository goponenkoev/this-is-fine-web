import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

 :root {
    --Main900: #4f4a4a;
    --Main800: #4a1f16;
    --Main700: #d64d31;
    --Main600: #f7502f;
    --Main500: #e88f5f;
    --Main400: #e8af90;
    --Main300: #000000;
    --Main200: #ffebe0;
    --Main100: #fcf4f0;
    --Main50: #fffdfc;
    
    --HeaderHeight: 48px;
 }
 
 html, body, #root {
    height: 100%;
 }
  
 body, input, button {
    font: 14px 'Roboto', sans-serif;
 }
`