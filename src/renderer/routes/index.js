import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../page/login/Login';

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
