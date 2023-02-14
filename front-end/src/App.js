import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './aut/Login';
import "react-toastify/dist/ReactToastify.css";
import Home from '../src/components/Home'
import NavBarStatus from './components/NavBars/NavBarStatus';
import Notification from './components/NavBars/Notification';
import NavbarLoggedIn from './components/NavBars/NavBarLoggedIn';


function App() {
  return (
    <BrowserRouter>
      <NavbarLoggedIn />
      {/* <NavBarStatus/> */}
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
