const { Schema, model } = require('mongoose');
const CategoriaSchema = Schema({
    Categoria: { type: String, required: [true, 'La categoria es obligatoria'] },
    Descripcion: { type: String, required: [true, 'La descripción es obligatoria'] },
    usuario: { type: Schema.Types.ObjectId, ref:'Usuario',requiered:true }

});


module.exports = model("Categoria", CategoriaSchema);