import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
import backgroundBg from '../../../../assets/images/login/login_bg.svg';
import loginMark from '../../../../assets/images/login/login_mark.svg';
import vector from '../../../../assets/images/login/vector.png';
import ModeToggle from '../../component/modeToggle';

function Login(this: any) {
  const [showPassword, setShowPassword] = useState(false);
  // calling IPC exposed from preload script

  const handleLogin = () => {
    // const authWindow = window.open(
    //   'http://localhost:3001/auth/google', // Backend endpoint to start Google OAuth
    //   '_blank',
    //   'width=500,height=600,resizable=no,scrollbars=yes',
    // );

    window.electron.ipcAuthRenderer.sendMessage('login-with-google', {});

    // window.addEventListener('message', (event) => {
    //   if (event.data === 'auth-success') {
    //     // authWindow?.close();
    //     // Optional: Take any additional actions after authentication (e.g., updating the UI)
    //   }
    // });

    // window.open('http://localhost:3001/auth/google', '_blank');
    // window.electron.ipcAuthRenderer.sendMessage('login-with-google', ['ping']);
    window.electron.ipcAuthResultRenderer.on(
      'login-result',
      (result, user, token) => {
        console.log('User info:', token);
        // authWindow?.close();

        localStorage.setItem('token', JSON.stringify(result));
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('access_token', JSON.stringify(token));
        // eslint-disable-next-line no-use-before-define
        navigate('/after');
      },
    );
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const navigate = useNavigate();

  return (
    <div className="flex w-full">
      <div
        className="w-1/2 bg-cover bg-center h-screen absolute top-0 left-0 rounded-r-3xl"
        style={{ backgroundImage: `url(${backgroundBg})` }}
      >
        <img src={loginMark} className='absolute top-[100px] left-0 right-0 mx-auto' />
      </div>
      <div className="w-screen flex">
        <div className="w-1/2" />
        <div className='absolute right-3 top-3'>
          <ModeToggle />
        </div>
        <div className="w-1/2 flex-col h-screen flex justify-center items-center">
          <div className="userID w-1/2 py-5">
            <span className='font-bold'>User ID:</span>
            <input
              className="rounded-lg w-full mt-1 dark:bg-gray-800"
              type="text"
            />
          </div>
          <div className="relative password w-1/2 py-5 pb-1">
            <span className='font-bold'>Password:</span>
            <input
              className="rounded-lg w-full mt-1 dark:bg-gray-800"
              type={showPassword ? 'text' : 'password'}
            />
            {showPassword ? (
              <div
                onClick={togglePasswordVisibility}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
                className="absolute top-[3em] inset-y-0 right-2 flex items-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="fill-current text-black dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <g clipPath="url(#clip0_643_1211)">
                      <path d="M8.00008 6C8.53051 6 9.03922 6.21071 9.41429 6.58579C9.78937 6.96086 10.0001 7.46957 10.0001 8C10.0001 8.53043 9.78937 9.03914 9.41429 9.41421C9.03922 9.78929 8.53051 10 8.00008 10C7.46965 10 6.96094 9.78929 6.58587 9.41421C6.21079 9.03914 6.00008 8.53043 6.00008 8C6.00008 7.46957 6.21079 6.96086 6.58587 6.58579C6.96094 6.21071 7.46965 6 8.00008 6ZM8.00008 3C11.3334 3 14.1801 5.07333 15.3334 8C14.1801 10.9267 11.3334 13 8.00008 13C4.66675 13 1.82008 10.9267 0.666748 8C1.82008 5.07333 4.66675 3 8.00008 3ZM2.12008 8C2.65892 9.10021 3.49562 10.0272 4.53507 10.6755C5.57452 11.3238 6.77501 11.6675 8.00008 11.6675C9.22515 11.6675 10.4256 11.3238 11.4651 10.6755C12.5045 10.0272 13.3412 9.10021 13.8801 8C13.3412 6.8998 12.5045 5.97283 11.4651 5.3245C10.4256 4.67616 9.22515 4.33245 8.00008 4.33245C6.77501 4.33245 5.57452 4.67616 4.53507 5.3245C3.49562 5.97283 2.65892 6.8998 2.12008 8Z"/>
                      <path d="M-1 2L16 13" stroke="currentColor"/>
                  </g>
                  <defs>
                      <clipPath id="clip0_643_1211">
                          <rect width="16" height="16" fill="white"/>
                      </clipPath>
                  </defs>
              </svg>


              </div>
            ) : (
              <div
                onClick={togglePasswordVisibility}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
                className="absolute top-[3em] inset-y-0 right-2 flex items-center"
              >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="fill-current text-black dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.99984 6C8.53027 6 9.03898 6.21071 9.41405 6.58579C9.78912 6.96086 9.99984 7.46957 9.99984 8C9.99984 8.53043 9.78912 9.03914 9.41405 9.41421C9.03898 9.78929 8.53027 10 7.99984 10C7.4694 10 6.9607 9.78929 6.58562 9.41421C6.21055 9.03914 5.99984 8.53043 5.99984 8C5.99984 7.46957 6.21055 6.96086 6.58562 6.58579C6.9607 6.21071 7.4694 6 7.99984 6ZM7.99984 3C11.3332 3 14.1798 5.07333 15.3332 8C14.1798 10.9267 11.3332 13 7.99984 13C4.6665 13 1.81984 10.9267 0.666504 8C1.81984 5.07333 4.6665 3 7.99984 3ZM2.11984 8C2.65867 9.10021 3.49537 10.0272 4.53482 10.6755C5.57427 11.3238 6.77477 11.6675 7.99984 11.6675C9.22491 11.6675 10.4254 11.3238 11.4649 10.6755C12.5043 10.0272 13.341 9.10021 13.8798 8C13.341 6.8998 12.5043 5.97283 11.4649 5.3245C10.4254 4.67616 9.22491 4.33245 7.99984 4.33245C6.77477 4.33245 5.57427 4.67616 4.53482 5.3245C3.49537 5.97283 2.65867 6.8998 2.11984 8Z"/>
                </svg>
              </div>
            )}
          </div>
          <div className="flex items-center w-1/2 mt-2">
            <input
              className="rounded-lg w-full w-[0.6rem] h-[0.6rem] me-[0.3rem]"
              type="checkbox"
            />
            <span className="text-xs">Remember Me</span>
          </div>
          <div className="flex items-center justify-end w-1/2 mt-5">
            <span className="text-sm me-[0.3rem]">Forgot Password?</span>
            <a
              href="https://www.moonlight-agency.fr/en/"
              className="m-0 underline text-blue-500 text-xs"
            >
              click here
            </a>
          </div>
          <div className="flex items-center justify-center w-1/2 mt-10">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full h-2/3 flex items-center justify-center mt-5 bg-purple-600 text-lg font-semibold py-2 rounded-xl"
            >
              <span className="mx-2 text-white">CONTINUE</span>
              <img className="mx-2" src={vector} alt="vector" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
