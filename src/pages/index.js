import React from 'react';
import SignIn from './layouts/SignIn';
import SignUp from './layouts/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudyRecord from './layouts/StudyRecord';
import StudyGoal from "./layouts/StudyGoal";
import StudyTime from "./layouts/StudyTime";

const Home = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<StudyRecord />} />
        <Route path="/studyGoal" element={<StudyGoal />} />
        <Route path="/studyTime" element={<StudyTime />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;