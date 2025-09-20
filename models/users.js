const { Schema, model } = require('mongoose');
const UsuarioSchema = Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    apellido: { type: String, requiered: true },
    fechaNacimiento:{type:Date},
    email: { type: String, require: [true, 'El email es obligatorio'] },
    password: { type: String, required: [true, 'La contraseña es obligatoria'] },
    img: { type: String, required: [true, 'La imagen es necesaria'] },
    rol: { type: String, required: true },
    empresa: { type: String, required: true },
    sucursal: { type: String, required: true },
    fechaRegistro: {type:Date,default:Date.now},
    estado: { type: Boolean, default: true }

});


module.exports = model("Usuario", UsuarioSchema);