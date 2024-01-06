import React from 'react';
import SignIn from './layouts/SignIn';
import SignUp from './layouts/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudyRecord from './layouts/StudyRecord';
import Communication from './layouts/Communication';

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<StudyRecord />} />
        <Route path="/communication" element={<Communication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;