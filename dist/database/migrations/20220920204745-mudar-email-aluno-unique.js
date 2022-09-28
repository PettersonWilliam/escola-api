"use strict";module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.changeColumn(
    'alunos', // TABELA
    'email', // COLUNA
    {
      type: Sequelize.STRING, // TIPO
      allowNull: false, // NULO - FALSO
      unique: true, // UNICO
    },
  ),
  down: () => {},
};

// changeColumn -- EDITANDO UMA COLUNA QUE JA EXISTE EM ALGUMA TABELA
