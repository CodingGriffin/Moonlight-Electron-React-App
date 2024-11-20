import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './component/Layout';
import Login from './page/login/Login';
import Dashboard from './page/Dashboard/Dashboard';
import Profile from './page/Profile/Profile';

import SearchContainer from './container/Search';
import Sheet from './container/Sheet';
import SheetDetail from './container/SheetDetail';
import History from './container/History';
import Favorite from './container/Favorite';
import Email from './container/Email';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Email />} />
        <Route path="/after" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="search" element={<SearchContainer />} />
          <Route path="history" element={<History />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="email" element={<Email />} />
          <Route path="profile" element={<Profile />} />
          <Route path="sheet" element={<Sheet />} />
          <Route path="sheet/:id" element={<SheetDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
