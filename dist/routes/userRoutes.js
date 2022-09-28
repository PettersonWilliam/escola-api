"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// esse dois metodos em uma aplicacao real nao deveria existir pois seria uma falha de seguranca ..
// eslint-disable-next-line max-len
// suponhamos que estamos em uma determinada pagina e nao seria viavel mostrar se alguem queira listar todos os usuarios
// isso seria uma falha muito grande
router.get('/', _UserController2.default.index); // lista usuarios -- OU SEJA COLOCAMOS ESSES DOIS PARA PARA COMPLETAR O CRUD
router.get('/:id', _UserController2.default.show); // lista usuario -- OU SEJA COLOCAMOS ESSES DOIS PARA PARA COMPLETAR O CRUD

router.post('/', _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/** ESSES SAO OS METODOS QUE AGENTE PODE TER
 *
 * index -- lista todos os usuarios -- GET
 * store/create -- cria um novo usuario -- POST
 * delete -- apaga um usuario -- DELETE
 * show -- mostra um usuario -- GET
 * update -- atualiza um usuario -- PATH ou PUT
 */
