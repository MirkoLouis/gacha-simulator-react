const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Database Connected');
    // Start the server only after successful database connection
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1); // Exit process with failure
  });

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Gacha Simulator v3 Backend API!' });
});

// Import and use project routes (will be created in the next step)
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

// Error handling middleware (optional, but good practice)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
