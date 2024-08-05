import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Product from "./components/Product";
import Order from "./components/Order";
import './Home.css';

function App() {
    return (
        <>
            <Routes>
                <Route element={<Login/>} path=''></Route>
                <Route element={<Register/>} path='register'></Route>
                <Route element={<Home/>} path='home'>
                    <Route element={<Product/>} path= ''></Route>
                    <Route element={<Order/>} path= 'order'></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
