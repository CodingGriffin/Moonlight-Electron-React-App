import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './page/login/Login';
import Dashboard from './page/Dashboard/Dashboard';
import Layout from './component/Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/after" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
