import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundBg from '../../../../assets/images/login/login_bg.svg';
import vector from '../../../../assets/images/login/vector.png';
import eye from '../../../../assets/images/login/password_eye.svg';
import './style.css';

function Login(this: any) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const navigate = useNavigate();

  return (
    <div className="flex w-full">
      <div
        className="w-1/2 bg-cover bg-center h-screen absolute top-0 left-0"
        style={{ backgroundImage: `url(${backgroundBg})` }}
      />
      <div className="w-screen flex">
        <div className="w-1/2" />
        <div className="w-1/2 flex-col h-screen flex justify-center items-center">
          <div className="userID w-1/2 py-5">
            <span>User ID:</span>
            <input
              className="rounded-lg w-full mt-1 custom-input"
              type="text"
            />
          </div>
          <div className="relative password w-1/2 py-5 pb-1">
            <span>Password</span>
            <input
              className="rounded-lg w-full mt-1 custom-input"
              type={showPassword ? 'text' : 'password'}
            />
            {showPassword ? (
              <div
                onClick={togglePasswordVisibility}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <img
                  className="absolute top-14 inset-y-0 right-2 flex items-center"
                  src={eye}
                  alt="eye"
                />
              </div>
            ) : (
              <div
                onClick={togglePasswordVisibility}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <img
                  className="absolute top-14 inset-y-0 right-2 flex items-center"
                  src={eye}
                  alt="eye"
                />
              </div>
            )}
          </div>
          <div className="flex items-center w-1/2">
            <input
              className="rounded-lg w-full custom-checkbox"
              type="checkbox"
            />
            <span className="remember-me">Remember Me</span>
          </div>
          <div className="flex items-center justify-end w-1/2 mt-5">
            <span className="forget-password">Forgot Password?</span>
            <a
              href="https://www.moonlight-agency.fr/en/"
              className="m-0 underline click-here"
            >
              click here
            </a>
          </div>
          <div className="flex items-center justify-center w-1/2 mt-10">
            <button
              type="button"
              onClick={() => navigate('/after')}
              className="w-full h-2/3 flex items-center justify-center mt-5 continue-button"
            >
              <span className="mx-2">CONTINUE</span>
              <img className="mx-2" src={vector} alt="vector" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
