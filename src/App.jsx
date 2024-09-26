
import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Cart from './pages/Cart';
import PNF from './pages/PNF';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ViewDetails from './pages/ViewDetails';
import { useContext, useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import UserContext from './context/UserContext';
function App() {
  let ctx = useContext(UserContext);
  let login = ctx.userData.login;
  console.log(login)
  return (
    <div className="App">
         <BrowserRouter>
        <div style={{marginBottom:"60px"}}>
        <Navbar/>
        </div>
        
            <Routes>
                <Route path='/' element={login===true?<Home/>:<Navigate to='/login'/>}/>
                <Route path='/about' element={<About/> }/>
                <Route path='/contact' element={<Contact />}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/login' element={login===false?<Login />:<Navigate to="/"/>}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/view' element={<ViewDetails />}/>
                <Route path='/*' element={<PNF />}/>
            </Routes>
            <ToastContainer />
         </BrowserRouter>
    </div>
  );
}

export default App;
