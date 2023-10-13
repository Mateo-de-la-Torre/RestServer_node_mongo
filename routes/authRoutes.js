const {Router} = require('express');


const authRoutes = Router();


authRoutes.get('/', (req, res) => {
    res.send('hola mundo');
})


module.exports = authRoutes

