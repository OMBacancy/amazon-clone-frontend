import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            light: '#e6ecfc',
            main: '#0f1111',
            dark: '#142659',
            contrastText: '#fff',
            cartCount: '#f08804'
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        error: {
            main: '#ba0f0f',
        }
    },
    typography: {
        fontFamily: 'sans-serif',
        fontSize: 13,
    }
});

export default theme;
