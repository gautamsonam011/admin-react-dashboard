import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from "./components/Header/index";
import Sidebar from './components/Sidebar';
import { useEffect, useState, createContext } from 'react';

const MyContext = createContext();

function App() {

  const [isToggleSider, setIsToggleSider] = useState(false);

  const values = {
    isToggleSider,
    setIsToggleSider

  }

  // useEffect(() =>{
  //   alert(isToggleSider)
  // }, [isToggleSider])
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <div className='main d-flex'>
          <div className={`sidebarWrapper ${isToggleSider===true ? 'toggle' : ''}`}>
            <Sidebar />
          </div>
          <div className={`content ${isToggleSider===true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
