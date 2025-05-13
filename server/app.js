const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const profileRoutes = require('./src/routes/profileRoutes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/api', profileRoutes);

app.get('/', (req, res) => {
  res.send('Sara Data Collection API');
});

module.exports = app;
