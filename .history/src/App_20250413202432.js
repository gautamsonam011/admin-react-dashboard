import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route to={'./'} element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
