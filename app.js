require('dotenv').config()
const express = require('express');
const cors = require('cors');
const db = require('./database/db');

const routes = require('./routes/index')

const port = process.env.PORT 
const app = express();

app.listen(port, () => {
  console.log(`%s listening at ${port}`)
  db();
})

app.use(express.json());
app.use(cors())
app.use('/api/users', routes);


