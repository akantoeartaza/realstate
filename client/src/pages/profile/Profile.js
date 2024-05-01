import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './profile.css';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:5000/api/profile', {
          headers: {
            'x-auth-token': token
          }
        });

        setUserData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleEditProfile = () => {
    navigate('/profile/edit');
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-body">
      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <div className="profile-container">
                <img src="assets/img/avatar.png" alt="Profile Picture" className="profile-image" />
                <div className="mt-3">
                  <h4>{userData.user.fullname}</h4>
                  <p className="text-secondary mb-1">{userData.user.designation}</p>
                  <p className="text-muted font-size-sm">{userData.user.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <div className="profile-info">
                <div>
                  <h6>Website</h6>
                  <p className="text-secondary">{userData.user.website}</p>
                </div>
                <div>
                  <h6>Github</h6>
                  <p className="text-secondary">{userData.user.github}</p>
                </div>
                <div>
                  <h6>Twitter</h6>
                  <p className="text-secondary">{userData.user.twitter}</p>
                </div>
                <div>
                  <h6>Instagram</h6>
                  <p className="text-secondary">{userData.user.instagram}</p>
                </div>
                <div>
                  <h6>Facebook</h6>
                  <p className="text-secondary">{userData.user.facebook}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <div className="profile-details">
                <div>
                  <h6>Full Name</h6>
                  <p className="text-secondary">{userData.user.fullname}</p>
                </div>
                <div>
                  <h6>Email</h6>
                  <p className="text-secondary">{userData.user.email}</p>
                </div>
                <div>
                  <h6>Mobile</h6>
                  <p className="text-secondary">{userData.user.mobile}</p>
                </div>
                <div>
                  <h6>Location</h6>
                  <p className="text-secondary">{userData.user.location}</p>
                </div>
                <div>
                  <h6>Skill</h6>
                  <p className="text-secondary">{userData.user.skill}</p>
                </div>
                <div>
                  <h6>Education</h6>
                  <p className="text-secondary">{userData.user.education}</p>
                </div>
                <div>
                  <h6>Experience</h6>
                  <p className="text-secondary">{userData.user.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-info edit-profile-btn" onClick={handleEditProfile}>Edit Profile</button>
    </div>
  );
};

export default Profile;
