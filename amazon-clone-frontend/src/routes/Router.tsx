import {useEffect, useContext} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

// *** Custom Components or functions
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Home from './pages/home/Home';
import ProductList from './pages/product/ProductList';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Error from './pages/error/Error';
import Logout from './pages/authentication/Logout';
import Dashboard from './pages/dashboard/Dashboard';
import {getCart} from '../redux/CartAction';
import Order from './pages/order/Order';
import {verifyToken} from '../api/apiRoutes';
import includeUserContext from '../utility/hooks/includeUserContext';

const Router = () => {
    const {token, login} = includeUserContext();
    const dispatch = useDispatch();
    const localToken = localStorage.getItem('token');
    //
    useEffect(() => {
        if (localToken) {

                    login(localToken);
                    dispatch(getCart())
        }
    }, [])

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    {!token ?
                        <>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            {/*<Route path="/forgot-password" element={<ForgotPassword/>}/>*/}
                            {/*<Route path="/reset-password" element={<ResetPassword/>}/>*/}
                        </>
                        :
                        <>
                            <Route path="/orders" element={<Order/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/logout" element={<Logout/>}/>
                        </>
                    }
                    <Route path="/product" element={<ProductList/>}/>
                    <Route path="/product/:id" element={<Product/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default Router
