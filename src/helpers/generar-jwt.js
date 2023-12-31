const jwt = require('jsonwebtoken');

const generarJWT = ( uid = '' ) => {
    return new Promise( (resolve, reject) => {
        const payload = { uid };
        jwt.sign( payload, 'Cl4v3S3Cr3t4', {
            expiresIn: '4h'
        }, ( err, token ) => {
            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        });
    });
}

module.exports = {
    generarJWT
}
