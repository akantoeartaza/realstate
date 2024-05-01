// UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import CSS file for styling


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="user-list">
      <h2>Engineer List</h2>
      <div className="card-container">
        {users.map((user) => (
          <div className="card" key={user._id}>
            <img src="assets/img/avatar.png" alt="Profile" className="profile-pic" />
            <h3>{user.fullname}</h3>
            <p>Email: {user.email}</p>
            <p>Mobile: {user.mobile}</p>
            <p>Skill: {user.skill}</p>
            <p>Website: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
