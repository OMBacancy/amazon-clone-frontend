import {BrowserRouter, Routes, Route} from "react-router-dom";

// Custom Components
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import ProductList from './pages/product/ProductList';
import Error from './pages/error/Error';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/dashboard/Dashboard';
import Order from './pages/order/Order';


// import {getCart} from '../redux/actions/cart';
// import {AuthContext} from '../utility/context/AuthContext';
// import Login from './pages/auth/Login';
// import Logout from './pages/auth/Logout';
// import Register from './pages/auth/Register';
// import ForgotPassword from './pages/auth/ForgotPassword';
// import ResetPassword from './pages/auth/ResetPassword';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/product" element={<ProductList/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Router
