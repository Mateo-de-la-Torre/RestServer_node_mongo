const { Router } = require( 'express' )

const usersRoutes = require('./usersRoutes');
const authRoutes = require('./authRoutes');



const mainRouter = Router();

mainRouter.use( '/users', usersRoutes );

mainRouter.use( '/auth', authRoutes );



module.exports = mainRouter