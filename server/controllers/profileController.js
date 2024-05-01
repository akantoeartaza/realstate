// profileController.js
const User = require('../models/user');

// Controller function to fetch user profile
const getProfile = async (req, res) => {
    try {
      // Extract user ID from the JWT token in the request headers
      const userId = req.user.id;
  
      // Fetch user's information from the database based on user id
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ user }); // Return user's information
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };
  

// Controller function to handle editing user's information
const editProfile = async (req, res) => {
  try {
    const { fullname, email, location, website, github, twitter, instagram, facebook, skill, experience, education, designation, mobile } = req.body;

    // Fetch user from database
    let user = await User.findById(req.user.id);

    // Update user's information
    user.fullname = fullname;
    user.email = email;
    user.location = location;
    user.website = website;
    user.github = github;
    user.twitter = twitter;
    user.instagram = instagram;
    user.facebook = facebook;
    user.skill = skill;
    user.experience = experience;
    user.education = education;
    user.designation = designation;
    user.mobile = mobile;

    await user.save();

    res.json({ success: true, message: 'Profile updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

module.exports = { getProfile, editProfile };
