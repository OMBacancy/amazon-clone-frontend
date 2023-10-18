import './App.css'
import {ThemeProvider} from '@mui/material'
import theme from './utility/theme/Theme'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
    return (<>
        <ThemeProvider theme={theme}>
            <Header/>
            <h1>Body</h1>
            <Footer/>
        </ThemeProvider>
    </>)
}

export default App
