import logo from '../../../assets/icon.svg';
import dashboardWhite from '../../../assets/images/sidebar/dashboard_white.svg';
import searchWhite from '../../../assets/images/sidebar/search_white.svg';
import sheetWhite from '../../../assets/images/sidebar/sheet_white.svg';
import historyWhite from '../../../assets/images/sidebar/history_white.svg';
import favoriteWhite from '../../../assets/images/sidebar/favorite_white.svg';
import emailWhite from '../../../assets/images/sidebar/email_white.svg';
import profileWhite from '../../../assets/images/sidebar/profile_white.svg';
import logoutWhite from '../../../assets/images/sidebar/logout_white.svg';

import dashboardBlack from '../../../assets/images/sidebar/dashboard_black.svg';
import searchBlack from '../../../assets/images/sidebar/search_black.svg';
import sheetBlack from '../../../assets/images/sidebar/sheet_black.svg';
import historyBlack from '../../../assets/images/sidebar/history_black.svg';
import favoriteBlack from '../../../assets/images/sidebar/favorite_black.svg';
import emailBlack from '../../../assets/images/sidebar/email_black.svg';
import profileBlack from '../../../assets/images/sidebar/profile_black.svg';
import logoutBlack from '../../../assets/images/sidebar/logout_black.svg';

import './style.css';

function SideBar() {
  return (
    <div className="relative h-screen w-20 sidebar">
      <div className="flex justify-center py-8">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex py-4 justify-center">
        <img src={dashboardBlack} alt="dashboard" />
      </div>
      <div className="flex py-4 justify-center">
        <img src={searchBlack} alt="search" />
      </div>
      <div className="flex py-4 justify-center">
        <img src={sheetBlack} alt="sheet" />
      </div>
      <div className="flex py-4 justify-center">
        <img src={historyBlack} alt="history" />
      </div>
      <div className="flex py-4 justify-center">
        <img src={favoriteBlack} alt="favorite" />
      </div>
      <div className="flex py-4 justify-center">
        <img src={emailBlack} alt="logo" />
      </div>
      <div className="absolute bottom-6 left-7">
        <div className="flex py-4 justify-center">
          <img src={profileBlack} alt="logo" />
        </div>
        <div className="flex py-4 justify-center">
          <img src={logoutBlack} alt="logout" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
