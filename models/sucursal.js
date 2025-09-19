const { Schema, model } = require('mongoose');
const SucursalSchema = Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    Ubicacion:{type:String,requiered:true},
    rol: { type: String, required: true },
    fechaRegistro: {type:Date,default:Date.now},
    usuario: { type: Schema.Types.ObjectId, ref:'Usuario',requiered:true }
});


module.exports = model("Sucursal", SucursalSchema);