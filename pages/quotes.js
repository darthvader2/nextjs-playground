import {Quote_render} from '../components/quotes/'
import {ThemeProvider} from 'styled-components';
import Dark from '../global/themes';
import ThemeSwitcher from '../global/global';
export default function quotes(){
    return(
        <ThemeProvider theme = {Dark}>
            <ThemeSwitcher/>
        <Quote_render>
            
        </Quote_render>
        </ThemeProvider>
    );
};