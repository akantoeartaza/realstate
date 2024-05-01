import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Header from './components/header';
import Home from './pages/Home/Home';
import Profile from './pages/profile/Profile';
import EditProfile from './pages/editProfile/EditProfile';
import UserList from './pages/userList/UserList'; 
import Project from './pages/project/project'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/users" element={<UserList />} /> 
        <Route path="/project" element={<Project />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
