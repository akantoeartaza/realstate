import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditProfile.css';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    location: '',
    website: '',
    github: '',
    twitter: '',
    instagram: '',
    facebook: '',
    skill: '',
    experience: '',
    education: '',
    designation: '',
    mobile: '',
    
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
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

        setFormData(response.data.user);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      await axios.put('http://localhost:5000/api/profile', formData, {
        headers: {
          'x-auth-token': token
        }
      });

      window.location.href = '/profile';
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Full Name:
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Location:
          <input
            type="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Website:
          <input
            type="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Github:
          <input
            type="github"
            name="github"
            value={formData.github}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Twitter:
          <input
            type="twitter"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Instagram:
          <input
            type="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Facebook:
          <input
            type="facebook"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Skill:
          <input
            type="skill"
            name="skill"
            value={formData.skill}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Experience:
          <input
            type="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Education:
          <input
            type="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Designation:
          <input
            type="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </label>
        </div>
        <div className="form-group">
        <label>
        Mobile:
          <input
            type="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </label>
        </div>
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
