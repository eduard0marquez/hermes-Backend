const { request, response } = require('express');
const esAdminRole = (req = request, res = response) => {
    if (!req.usuario){
        //No validamos el token antes
        return res.status(500).json({
            msg: "Se requiere validar el rol"
        });
    }

    const { rol, nombre, apellido } = req.usuario;

    if (rol !== "Superusuario") {
        return res.status(401).json({
            msg: `${nombre} ${apellido} no es administrador`
        });
    }

    next();
}

module.exports = {
    esAdminRole,
}