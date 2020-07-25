import {createGlobalStyle} from 'styled-components';


const ThemeSwitcher = createGlobalStyle`
    body{
        background-image:${props => props.theme.BackgroundColor};
        overflow-x : hidden;
    } `
    ;
export default ThemeSwitcher;