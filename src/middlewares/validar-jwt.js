const jwt = require('jsonwebtoken');
const UserService = require('../services/user.services');

const validarJWT = async( req, res, next ) => {
    const token = req.headers.authorization;

    if ( !token ) {
        return res.status(401).json({
            code: 401,
            message: 'No hay token en la petición'
        });
    }

    try {
        const { id } = jwt.verify( token, 'Cl4v3S3Cr3t4' );

        // leer el administrador que corresponde al uid
        const user = await UserService.getById(id)

        if( !user ) {
            return res.status(401).json({
                code: 401,
                message: 'Token no válido - usuario no existe DB'
            })
        }
             
        req.user = user;
        next();

    } catch (error) {
        res.status(401).json({
            code: 401,
            message: 'Token no válido'
        })
    }

}

module.exports = {
    validarJWT
}