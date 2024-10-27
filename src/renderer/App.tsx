import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './page/login/Login';
import Dashboard from './page/Dashboard/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
