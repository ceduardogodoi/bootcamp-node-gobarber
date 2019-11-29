require('dotenv');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true, // cria timestamps para criação e alteração de dados
    underscored: true, // cria nome das tabelas no padrão underscored
    underscoredAll: true, // cria nome das colunas no padrão underscored
  },
};
