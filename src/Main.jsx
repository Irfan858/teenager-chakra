import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminCourseDetail from './pages/AdminCourseDetail';
import AdminCourseList from './pages/AdminCourseList';
import AdminUserList from './pages/AdminUserList';
import Course from './pages/Course';
import CourseDetail from './pages/CourseDetail';
import Discussion from './pages/Discussion';
import Home from './pages/Home';
import Log from './pages/Log';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Answer from './pages/Answer';
import Submission from './pages/Submission';

export default function Main() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Log />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/discussion" element={<Discussion />} />
      <Route path="/course" element={<Course />} />
      <Route path="/coursedetail" element={<CourseDetail />} />
      <Route path="/answer" element={<Answer />} />
    </Routes>
  );
}
