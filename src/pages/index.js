import React from 'react';
import SignIn from './layouts/SignIn';
import SignUp from './layouts/Signup';
import Main from "./layouts/Main";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudyGoal from "./layouts/StudyGoal";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/studyGoal" element={<StudyGoal />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;