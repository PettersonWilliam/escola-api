"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: { // tamanho
            args: [3, 255], // argumnto precisa ter um caract. no minimo 3 e maximo 255.
            msg: ' Campo nome deve ter entre 3 e 255 caracters', // mensagem que queremos que nos retorne quando naoestuive completando os campos necessarios
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email jà existe',
        },
        validate: {
          isEmail: { // email invalido
            msg: 'Email invalido',
          },
        },
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL, // um campo onde nao vai ser salvo na memoria( basse de dados )
        defaultValue: '',
        validate: {
          len: { // tamanho
            args: [6, 50], // argumnto precisa ter um caract. no minimo 3 e maximo 255.
            msg: 'A senha precisa ter entre 6 e 50 caracters', // mensagem que queremos que nos retorne quando nao estive completando os campos necessarios
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
