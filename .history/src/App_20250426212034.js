import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from "./components/Header/index";
import Sidebar from './components/Sidebar';
import { useState, createContext } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const MyContext = createContext();

function App() {

  const [isToggleSider, setIsToggleSider] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarHeader, setisHideSidebarHeader] = useState(false);
  const values = {
    isToggleSider,
    setIsToggleSider,
    isLogin,
    setIsLogin,
    isHideSidebarHeader,
    setisHideSidebarHeader

  }

  
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
         isHideSidebarHeader !== true && <Header />
        }
        
        <div className='main d-flex'>
          {
            isHideSidebarHeader !== true &&
            <div className={`sidebarWrapper ${isToggleSider===true ? 'toggle' : ''}`}>
            <Sidebar />
          </div>
          }
          
          <div className={`content ${isHideSidebarHeader === true && 'full'} ${isToggleSider===true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
              <Route path="/dashboard" exact={true} element={<Dashboard />} />
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/signup" exact={true} element={<SignUp/>} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
