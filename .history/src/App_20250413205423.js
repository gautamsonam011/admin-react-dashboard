import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './pages/Dashboard/Dashboard';
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path = "/" exact={true} element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
