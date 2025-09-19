const { Router } = require('express');
const { check } = require('express-validator');
const {usuarioGet, usuarioGetID, usuarioPost}=require('../controllers/usuarios')
const { emailExiste, esRolValido, usuarioExiste } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { esAdminRole } = require('../middlewares/validar-roles');

const router = Router();

router.get('/', [
    validarJWT,
    esAdminRole
], usuarioGet);

router.get('/:id', [
    check("id", "El id no es válido").isMongoId(),
    check("id").custom(usuarioExiste),
    validarCampos
],usuarioGetID);

router.post('/', [
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("apellido", "El apellido es obligatorio").notEmpty(),
    check("correo").custom(emailExiste),
    check("password", "La contraseña debe tener un minimo de 8 catacteres").isLength({ min: 6 }),
    check("rol").custom(esRolValido),
    validarCampos
], usuarioPost)

module.exports = router;