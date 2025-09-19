const { Schema, model } = require('mongoose');
const RolSchema = Schema({
    rol: { type: String, required: [true, 'El rol es obligatorio'] },
    usuario: { type: Schema.Types.ObjectId, ref:'Usuario',requiered:true }

});


module.exports = model("Rol", RolSchema);