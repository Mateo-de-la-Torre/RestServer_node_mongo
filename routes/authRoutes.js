const {Router} = require('express');
const { check } = require('express-validator');
const { login, googleSingIn } = require('../controllers/authController');
const { validarCampos } = require('../middlewares/validar-campos');

const authRoutes = Router();


authRoutes.post('/login',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validarCampos
], login)


authRoutes.post('/google',[
    check('id_token', 'id_token de google es necesario').not().isEmpty(),
    validarCampos
], googleSingIn)


module.exports = authRoutes

