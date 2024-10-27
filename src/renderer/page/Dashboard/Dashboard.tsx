import SideBar from '../../component/SideBar';
import Header from '../../component/Header';

function Dashboard() {
  return (
    <div className="flex w-screen">
      <SideBar />
      <div>
        <Header />
        <div>Dashboard</div>
      </div>
    </div>
  );
}

export default Dashboard;
