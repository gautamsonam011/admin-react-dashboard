import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from "./components/Header/index";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main d-flex'>
        <div className='sidebarWrapper'>
          <Sidebar />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
