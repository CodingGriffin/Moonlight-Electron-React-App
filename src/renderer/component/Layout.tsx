import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import Header from './Header';

function Layout() {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="relative flex-1">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
