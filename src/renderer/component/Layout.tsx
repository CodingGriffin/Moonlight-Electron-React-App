import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
// import Header from './Header';

function Layout() {
  return (
    <div className="flex w-full h-full">
      <SideBar />
      <div className="relative flex-1 h-screen bg-stone-100 dark:bg-gray-800 sm:overflow-y-scroll lg:overflow-auto">
        {/* <Header /> */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
