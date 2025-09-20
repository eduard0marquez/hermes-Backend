const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';
        this.usuariosPath = '/api/usuarios';
        //this.productosPath = '/api/productos';
       // this.sucursalPath = '/api/sucursal';
       // this.catagoriasPath = '/api/categorias';

        //conectar con Base de datos
        this.conectarBD();


        //Middlewares
        this.middlewares();

        //Funcion para las rutas
        this.routes();

    }

    async conectarBD() {
        await dbConnection();
    }
    
    middlewares() {
        //CORS
        this.app.use(cors());

        //Leer lo que el usuario envía por el cuerpo de la peticion
        this.app.use(express.json());

        //Definir la carpeta pública
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuario'));
        this.app.use(this.authPath, require('../routes/auth'));
        //this.app.use(this.catagoriasPath, require('../routes/categoria'));
        //this.app.use(this.productosPath, require('../routes/producto'));
        //this.app.use(this.sucursalPath, require('../routes/sucursal'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor en linea en el puerto :', this.port);
        })
    }
}

module.exports = Server;