import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: { // tamanho
            args: [3, 255], // argumnto precisa ter um caract. no minimo 3 e maximo 255.
            msg: ' Campo nome deve ter entre 3 e 255 caracters', // mensagem que queremos que nos retorne quando naoestuive completando os campos necessarios
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL, // um campo onde nao vai ser salvo na memoria( basse de dados )
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
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
