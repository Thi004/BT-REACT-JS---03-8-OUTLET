import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Product from "./components/Product";
import Order from "./components/Order";
import Home2 from "./components2/Home2";
import List from "./components2/List";
import Add from "./components2/Add";
import './App.css'



function App() {
    return (
        <>
            <Routes>
                {/*<Route element={<Login/>} path=''></Route>*/}
                {/*<Route element={<Register/>} path='register'></Route>*/}
                {/*<Route element={<Home/>} path='home'>*/}
                {/*    <Route element={<Product/>} path= ''></Route>*/}
                {/*    <Route element={<Order/>} path= 'order'></Route>*/}
                {/*</Route>*/}
                <Route element={<Home2/>} path={'/admin/students'}>
                    <Route element={<List/>} path={'list'}></Route>
                    <Route element={<Add/>} path={'add'}></Route>
                </Route>

            </Routes>
        </>
    );
}

export default App;
