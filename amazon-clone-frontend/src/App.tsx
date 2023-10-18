// import './App.css'
import {ThemeProvider} from '@mui/material'
import theme from './utility/theme/Theme'
import Router from "./routes/Router";

function App() {
    return (<>
        <ThemeProvider theme={theme}>
            <Router/>
        </ThemeProvider>
    </>)
}

export default App
