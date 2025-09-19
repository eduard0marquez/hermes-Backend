const { Schema, model } = require('mongoose');
const ProductoSchema = Schema({
    nombre: { type: String, required: [true, 'El nombre es obligatorio'] },
    estado:{type:String,requiered:true},
    precio: { type: String, require: [true, 'El email es obligatorio'] },
    descripcion: { type: String, required: [true, 'La contraseña es obligatoria'] },
    img: { type: String, required: [true, 'La imagen es necesaria'] },
    destacado: { type: String, required: true },
    categoria: { type: String, required: true },
    sucursal: { type: String, required: true },
    sku:{type:String,require:true},
    fechaRegistro: { type: Date, default: Date.now },
    usuario: { type: Schema.Types.ObjectId, ref:'Usuario',requiered:true }
    

});


module.exports = model("Producto", ProductoSchema);