const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const colorRoutes = require('./routes/colors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/colors', colorRoutes);

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/color-suggestion-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
