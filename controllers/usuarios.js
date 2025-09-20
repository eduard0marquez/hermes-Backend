const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/users');

const usuarioGet = async (req = request, res = response) => {
    const query = { estado: true };
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query)
    ]);
    res.json({
        mensaje: "Usuarios Obtenidos",
        total,
        usuarios
    });
}

const usuarioGetID = async (req = request, res = response) => {
    const { id } = req.params;
    const usuario = await Usuario.findById(id)
    
    res.json({
        mensaje: "Usuario obtenido",
        usuario
    })
}

const usuarioPost = async (req = request, res = response) => {
    //Recibir el cuerpo de la petición
    const datos = req.body;

    const { nombre, apellido, email, password, rol, empresa, sucursal, fechaRegistro, estado,fechaNacimiento,img } = datos;

    const usuario = new Usuario({ nombre, apellido,fechaNacimiento, email, password, rol, empresa, sucursal, fechaRegistro, estado,img });

    //encriptar la contraseña
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    usuario.password = hash;

    //guardar los datos en la Base
    await usuario.save();

    res.json({
        mensaje: "Usuario cargado correctamente",
        usuario
    })

}

const usuarioPut = async (req = request, res = response) => {
    const { id } = req.params;

    //Obtener datos para actualizar
    const { password, correo, ...resto } = req.body;

    //si actualiza el password, debo encriptarlo
    if (password) {
        const salt = bcrypt.genSaltSync(10);
        resto.password = bcrypt.hashSync(password, salt);
    }

    //Modificacion de los datos
    resto.correo = correo;
    //Buscar usuario y actualizarlo
    const usuario = await Usuario.findByIdUpdate(id, resto, { new: true });
    res.json({
        mensaje: "Usuario actualizado correctamente",
        usuario
    })
}

module.exports = {
    usuarioGet,
    usuarioGetID,
    usuarioPost

}