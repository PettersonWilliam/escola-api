"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // INDEX -- aqui estamos listando todos os usuarios
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ atributes: ['id', 'nome', 'email'] });

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // SHOW -- listando pelo ID -- mostrando apenas 1 usuario
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // UPDATE -- atualizando os dados
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['usuario nao existe.'],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // DELETE -- apagando os daos
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['usuario nao existe.'],
        });
      }
      await user.destroy();

      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

/** ESSES SAO OS METODOS QUE AGENTE PODE TER
 *
 * index -- lista todos os usuarios
 * store/create -- cria um novo usuario
 * delete -- apaga um usuario
 * show -- mostra um usuario
 * update -- atualiza um usuario
 */

exports. default = new UserController();
