const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        
        const usuario = await User.findOne({email});
        
        // Verificar si el email existe
        if (!usuario) {
            return res.status(400).send({message: 'El email o el password son incorrectos'})
        }

        // Verificar si el usuario esta activo
        if (!usuario.estado) {
            return res.status(400).send({message: 'El email o el password son incorrectos -estado en false'})
        }

        const validPassword = await bcrypt.compare(password, usuario.password);

        if (!validPassword) {
            return res.status(400).send({message: 'El password es incorrecto'})
        } 
       
        const {id, name, rol, image } = usuario

        const data = {
            id: id,
            email: email,
            name: name,
            rol: rol,
            image: image,
        }
        const token = jwt.sign(data, process.env.SECRET_KEY, {
            expiresIn: '10000h',
        });


        res.json({
            message: 'Usuario logeado correctamente',
            usuario: {
                id,
                email,
                name,
                rol,
                image,
                token
            }
        })
        

    } catch (error) {
        console.log(error);
        return res.status(500).send('hable con el administrador')
    }
};

module.exports = {
    login
}