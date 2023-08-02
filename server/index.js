const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv=require('dotenv')
const crudRoutes=require('./routes/crud')
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/api',crudRoutes)
CONNECT_URL=process.env.MONGO_DB
mongoose.connect(CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));



const PORT = process.env.PORT || 5000
app.get('/', (req, res) => {
    res.send(`Server is running correctly on port ${PORT}`);
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });