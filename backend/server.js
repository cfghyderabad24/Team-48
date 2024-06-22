const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const instructorRoutes = require('./routes/instructorRoutes')
const adminRoutes = require('./routes/adminRoutes')
const studentRoutes = require('./routes/studentRoutes')
const imageApp = require('./routes/imageApp')

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.use('/instructor-api',instructorRoutes)
app.use('/admin-api',adminRoutes)
app.use('/student-api',studentRoutes)
app.use('/image-api',imageApp)

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  
  
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });