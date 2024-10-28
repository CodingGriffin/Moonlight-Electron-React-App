import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Login from './page/login/Login';
import Dashboard from './page/Dashboard/Dashboard';
import Search from './page/Search/Search';
import Sheet from './page/Sheet/Sheet';
import History from './page/History/History';
import Favorite from './page/Favorite/Favorite';
import Email from './page/Email/Email';
import Profile from './page/Profile/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/after" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="search" element={<Search />} />
          <Route path="sheet" element={<Sheet />} />
          <Route path="history" element={<History />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="email" element={<Email />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}
