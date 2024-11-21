import React, { useEffect, useState } from 'react';
import avatar from '../../../assets/images/header/avatar.png';
import downArrowBlack from '../../../assets/images/header/down_arrow_black.svg';
import downArrowWhite from '../../../assets/images/header/down_arrow_white.svg';
import searchIconBlack from '../../../assets/images/header/search_icon_black.svg';
import searchIconWhite from '../../../assets/images/header/search_icon_white.svg';
import './style.css';

function Header() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser: any = JSON.parse(localStorage.getItem('user') || '');
    console.log('here is the head', savedUser);
    setUser(savedUser);
  }, []);
  return (
    <div className="w-full flex justify-between p-5">
      <div className="relative">
        <img
          className="search-icon absolute left-5 top-3"
          src={searchIconWhite}
          alt="search icon"
        />
      </div>
      <div className="">DashBoard</div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mr-3">
          <span className="name text-sm">{user?.name}</span>
          <span className="email text-xs">{user?.email}</span>
        </div>
        <div className="flex flex-row items-center">
          <img
            className="mr-3 rounded-full w-10 h-10"
            src={user?.picture}
            alt="avater"
          />
          <img className="down-arrow" src={downArrowWhite} alt="down arrow" />
        </div>
      </div>
    </div>
  );
}

export default Header;
