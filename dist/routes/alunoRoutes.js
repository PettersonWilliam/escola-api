"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _AlunoController2.default.index); // nao logamos no index pois neste caso ele so lista
router.post('/', _loginRequired2.default, _AlunoController2.default.store); // loginRequired -- usuarios logados
router.put('/:id', _loginRequired2.default, _AlunoController2.default.update); // loginRequired -- usuarios logados
router.get('/:id', _AlunoController2.default.show); // tbm nao usamos no show pois ele so lista 1
router.delete('/:id', _loginRequired2.default, _AlunoController2.default.delete);// loginRequired - usuarios logados

exports. default = router;
