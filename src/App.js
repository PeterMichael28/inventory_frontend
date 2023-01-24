import Home from "./pages/Home/Home";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import Sidebar from "./components/sidebar/Sidebar";
import Layout from "./Layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard"
import axios from 'axios';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginStatus } from "./services/authService";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, SET_LOGIN } from "./store/features/auth/authSlice.js";
import { useEffect } from "react";
import AddProduct from "./pages/addProduct/AddProduct";
import ProductDetail from "./pages/productDetail/ProductDetail";
import EditProduct from "./pages/editProduct/EditProduct";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/profile/EditProfile";
import Contact from "./pages/contact/Contact";


axios.defaults.withCredentials = true; //to accept all credentials from backend

function App() {

  const dispatch = useDispatch()




  useEffect( () => {
    
    const userIsStillLoggedIn = async () => {
      const data = await loginStatus()
      await dispatch( SET_LOGIN( data ) )

    }
    userIsStillLoggedIn()
  
    
  }, [dispatch])



  const ShowOnLogouts = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
  
    if (!isLoggedIn) {
      return <> {children}</>;
    }
    return <Navigate to='/dashboard' />;
  };
  


  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<ShowOnLogouts><Login /></ShowOnLogouts>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/forgot' element={<Forgot />}></Route>
        <Route path='/resetpassword/:resetToken' element={<Reset />}></Route>
        <Route path='/dashboard' element={
          <Sidebar>
            <Layout>
              <Dashboard />
            </Layout>
          </Sidebar>
        }></Route>

    <Route path='/add-product' element={
          <Sidebar>
            <Layout>
              <AddProduct />
            </Layout>
          </Sidebar>
        }></Route>
    
      
      <Route path="/product-detail/:id" element={
          <Sidebar>
            <Layout>
              <ProductDetail />
            </Layout>
          </Sidebar>
        }></Route>

      <Route path="/edit-product/:id" element={
          <Sidebar>
            <Layout>
              <EditProduct />
            </Layout>
          </Sidebar>
        }></Route>

         <Route path="/profile" element={
          <Sidebar>
            <Layout>
              <Profile />
            </Layout>
          </Sidebar>
        }></Route>

    <Route path="/edit-profile" element={
          <Sidebar>
            <Layout>
              <EditProfile />
            </Layout>
          </Sidebar>
        }></Route>

        
    <Route path="/contact-us" element={
          <Sidebar>
            <Layout>
              <Contact />
            </Layout>
          </Sidebar>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
