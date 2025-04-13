import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" exact={true} element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
