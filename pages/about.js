import Link from 'next/link';
import {ThemeProvider} from 'styled-components';
import Dark from '../global/themes';
import ThemeSwitcher from '../global/global';

export default function calculator(){
    return(
        <ThemeProvider theme = {Dark}>
        <ThemeSwitcher/>
   
   </ThemeProvider>
    )
    };
