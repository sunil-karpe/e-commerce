import Home from "./pages/Home";

import Cart from "./pages/Cart";

import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Pay from "./pages/Pay";
import Success from "./pages/Success";
import Logout from "./pages/Logout";
import { useSelector } from "react-redux";


function App() {
  const user=useSelector(state=>state.user.currentUser);

  return (

    <Router>
      <Routes>
        <Route path="/home"  element={<Home />}/>
        <Route path="/"  element={<Home />}/>
        <Route path="/products/:category"  element={<ProductList />}/>
        <Route path="/products"  element={<ProductList />}/>
        <Route path="/cart"  element={<Cart />}/>
        <Route path="/pay"  element={<Pay />}/>
        <Route path="/success"  element={<Success />}/>
        <Route path="/register"  element={user?<Navigate to="/" replace />:<Register />}/>
        {/* <Route path="/login"  element={<Login />}/> */}
        <Route path="/login"  element={user?<Navigate to="/" replace />:<Login />}/>
        <Route path="/logout"  element={<Logout />}/>
        <Route path="/product/:id"  element={<Product />}/>
      </Routes>
    </Router>

    // <ProductList/>
    // <Product />
    // <Register />
    // <Login/>
    // <Cart/>

  );
}

export default App;
