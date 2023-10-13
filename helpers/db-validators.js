const Role = require('../models/role');
const User = require('../models/user');


const isRoleValidate = async(rol = '') => {
    const existRol = await Role.findOne({ rol });
    if (!existRol) {
        throw new Error(`El rol ${rol} no esta registrado en la DB`);
    }
}

const existEmail = async (email = '') => {
    const existEmail = await User.findOne({ email });
    if (existEmail) {
        throw new Error(`El email ${ email } ya esta registrado`);
    }
}


const existID = async (id) => {
    const existID = await User.findById( id );
    if (!existID) {
        throw new Error(`No existe un usuario con el id: ${ id } `);
    }
}








module.exports = {
    isRoleValidate,
    existEmail,
    existID,
}