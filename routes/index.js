const {Router} = require('express');
const { getUser, postUser, putUser, deleteUser, patchUser } = require('../controllers/users');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isRoleValidate, existEmail, existID } = require('../helpers/db-validators');



const router = Router();


router.get('/', getUser);


router.post('/', [
    check('name', 'El name es obligatorio').not().isEmpty(),
    check('password', 'El password debe de tener mas de 6 caracteres').isLength({ min: 6}),
    check('email', 'El email no es valido').isEmail(),
    check('email').custom(existEmail),
    check('rol').custom(isRoleValidate),
    validarCampos
    
], postUser);


router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existID),
    check('rol').custom(isRoleValidate),
    validarCampos
], putUser);


router.delete('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existID),
    validarCampos
], deleteUser)


router.patch('/', patchUser);



module.exports = router;