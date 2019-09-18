const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const config = require('config');

const app = express();

app.use(express.json());
app.use(cors())

const db = config.get('MONGO_URI');

mongoose
  .connect(db, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use('/api/jobs', require('./routes/api/job'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

const port = process.env.PORT || 6005;

app.listen(port, () => console.log(`Server started on port ${port}`));
