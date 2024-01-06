import React from 'react';
import SignIn from './layouts/SignIn';
import SignUp from './layouts/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' />
      </Routes>
      <SignUp />
    </BrowserRouter>
  );
};

export default Home;