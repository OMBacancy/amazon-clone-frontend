import './App.css'
import Router from './routes/Router'
import { ThemeProvider } from '@mui/material'
import theme from './utility/theme/theme'
import { Provider } from "react-redux";
import store from './redux/Store';

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router />
                </Provider>
            </ThemeProvider>
        </>
    )
}

export default App
