const express = require('express');
const cors = require('cors');
const connectDB = require('./middlewares/db');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes'); 

require('dotenv').config();

const app = express();

app.use(cors({
  origin: ['http://localhost:3000']
}));

connectDB()
  .then(() => {
    app.use(express.json());

    app.use('/api/auth', authRoutes);
    app.use('/api/profile', profileRoutes);
    app.use('/api', userRoutes); 
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
  });
