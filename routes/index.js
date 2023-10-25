const { Router } = require( 'express' )

const usersRoutes = require('./usersRoutes');
const authRoutes = require('./authRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const productsRoutes = require('./productsRoutes')
const buscarRoutes = require('./buscarRoutes');


const mainRouter = Router();

mainRouter.use( '/users', usersRoutes );

mainRouter.use( '/auth', authRoutes );

mainRouter.use( '/categories', categoriesRoutes );

mainRouter.use( '/products', productsRoutes );

mainRouter.use( '/buscar' , buscarRoutes) 


module.exports = mainRouter