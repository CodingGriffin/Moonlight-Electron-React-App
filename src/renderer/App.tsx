import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Login from './page/login/Login';
import Dashboard from './page/Dashboard/Dashboard';
import Sheet from './page/Sheet/Sheet';
import Profile from './page/Profile/Profile';

import Favorite from './container/Favorite';
import History from './container/History';
import Email from './container/Email';
import SearchContainer from './container/Search';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/after" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="search" element={<SearchContainer />} />
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
