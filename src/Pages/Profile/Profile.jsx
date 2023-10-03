import React, { useState } from 'react';

import "./profileStyle.css";
import  Navbar  from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

  const currentUser=JSON.parse(localStorage.getItem("currentUser"))
  

  return (

    <>
    <div className='bg'>
      <Navbar/>
    <div className="profile-container"><br/>
      <h2>User Profile</h2>
      <div className="profile-info">
       {/* <p><strong>Name:</strong> {user.img}</p>   */}
        <p><strong>Name:</strong> {currentUser.name}</p>
        <p><strong>Email:</strong> {currentUser.email}</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default Profile
