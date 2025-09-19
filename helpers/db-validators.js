const Usuario = require('../models/users');
const Rol = require('../models/rol');
const Categoria = require('../models/categoria');
const Producto = require('../models/productos');
const Sucursal = require('../models/sucursal');


//validar email
const emailExiste = async (email) => {
    //se verifica que el email exista en la base, findOne es para que busque en los datos y con el primero que encuentre ,con eso lo da como validado
    const existeEmail = await Usuario.findOne({ email });
    if (existeEmail) {
        throw new Error(`El correo ${email} ya se encuentra en la base de datos`);
    }
}



//validar rol
const esRolValido = async (rol)=>{
    const existeRol = await Rol.findOne({ rol });
    if (!existeRol) {
        throw new Error(`El rol ${rol} no existe en la base de datos`);
    }
}

//validar si el usuario con el id proporcionado existe
const usuarioExiste = async (id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id ${id} no corresponde a ningun usaurio registrado`);
    }
}

//Validar si la categoria del producto existe
const categoriaExiste = async (id) => {
    const existeCategoria = await Categoria.findById(id)
    
    if (!existeCategoria) {
        throw new Error(`El id ${id} no corresponde a ninguna categoría registrada`);
    }
}

//Validar si el producto existe
const productoExiste = async (id) => {
    const existeProducto = await Producto.findById(id)
    if (!existeProducto) {
        throw new Error(`el id ${id} no corresponde a ningun producto registrado`);
    }
}

//Validar la sucursal existe
const sucursalExiste = async (id) => {
    const existeProducto = await Sucursal.findById(id)
    if (!existeProducto) {
        throw new Error(`el id ${id} no corresponde a ninguna sucursal registrado`);
    }
}

module.exports = {
    esRolValido,
    emailExiste,
    usuarioExiste,
    categoriaExiste,
    productoExiste,
    sucursalExiste,
}