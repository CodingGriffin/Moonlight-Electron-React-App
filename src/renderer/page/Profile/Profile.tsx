import { useEffect, useState } from 'react';
import avatar from '../../../../assets/images/header/avatar.png';
import DarkToggle from '../../component/DarkToggle';
import './style.css';
import ModeToggle from '../../component/modeToggle';
import Header from '../../component/Header';

function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser: any = JSON.parse(localStorage.getItem('user') || '');
    console.log('here is the head', savedUser);
    setUser(savedUser);
  }, []);
  return (
    <div>
      <Header title="user settings" />
      <div className="rounded-3xl pb-10 bg-white dark:bg-gray-700 mx-10 p-10 my-12">
        {/* <div className="flex justify-end w-full">
          <button className="save-btn" type="button">
            Save Changing
          </button>
        </div> */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center justify-center mr-20">
            <img
              className="w-36 h-36 mb-5 rounded-full"
              src={user?.picture}
              alt="avatar"
            />
            {/* <button
              className="w-28 h-10 upload-btn flex items-center justify-center"
              type="button"
            >
              upload
            </button> */}
          </div>
          <div className="flex flex-col justify-center">
            <span className="full-name">{user?.name}</span>
            <span className="specify-name">Specify your full name</span>
            <span className="full-name">{user?.email}</span>
          </div>
          <div className="flex flex-row justify-center items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
