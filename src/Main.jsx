import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Course from './pages/Course';
import Discussion from './pages/Discussion';
import Home from './pages/Home';
import Log from './pages/Log';
import Login from './pages/Login';
import Profile from './pages/Profile';

export default function Main() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Log />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/discussion" element={<Discussion />} />
      <Route pat="/course" element={<Course />} />
    </Routes>
  );
}
