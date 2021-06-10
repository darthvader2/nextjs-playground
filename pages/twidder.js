import Link from 'next/link';
import {ThemeProvider} from 'styled-components';
import Dark from '../global/themes';
import ThemeSwitcher from '../global/global';
import twidderWrap from '../components/twitter'
export default function twidder(){
    return(
        <ThemeProvider theme = {Dark}>
        <ThemeSwitcher/>
        <twidderWrap/>
        <h1>Welcome to twidder</h1>
        

   </ThemeProvider>
    )
    };

