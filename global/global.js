import {createGlobalStyle} from 'styled-components';


const ThemeSwitcher = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
    body{
        background-color:#e5dede;
        overflow-x : hidden;
        font-family: 'Space Mono', monospace;
    } `
    ;
export default ThemeSwitcher;
