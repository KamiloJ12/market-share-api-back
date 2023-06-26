const UserServices = require("../services/user.services");

const bcryptjs = require('bcryptjs')
const { generarJWT } = require('../helpers/generar-jwt');

const login = async(req, res = response) => {
    try {
        const { email, password } = req.body;
        // Verificar si el email existe
        const user = await UserServices.getByEmail(email);
        if ( !user ) {
            return res.status(400).json({
                code: 400,
                message: 'Usuario / Password no son correctos - correo'
            });
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync( password, user.password );
        if ( !validPassword ) {
            return res.status(400).json({
                code: 400,
                message: 'Usuario / Password no son correctos - password'
            });
        }

        // Generar el JWT
        const token = await generarJWT( user.id );

        res.json({ user, token });

    } catch (error) {
        res.status(500).json({
            code: 500,
            message: 'Ocurrio un error en el servidor'
        });
    }   

}


module.exports = {
    login
}