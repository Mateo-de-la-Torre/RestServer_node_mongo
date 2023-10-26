require('dotenv').config()
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload')

const db = require('./database/db');

const mainRouter = require('./routes/index')

const port = process.env.PORT 
const app = express();

app.listen(port, () => {
  console.log(`%s listening at ${port}`)
  db();
})


// Midlewares

app.use(express.json()); // Lectura y parseo del body

app.use(cors()) // Cors

app.use(fileUpload({ // Carga de archivos (PONER ANTES QUE LA RUTA PRINCiPAL)
  useTempFiles : true,
  tempFileDir : '/tmp/',
  createParentPath: true // si no existe la carpeta, la crea automaticamente
}));

app.use('/api', mainRouter);  // Ruta principal

app.use(express.static('public')); // Directorio Public




