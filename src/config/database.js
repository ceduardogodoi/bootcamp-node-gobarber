module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true, // cria nome das tabelas no padrão underscored
    underscoredAll: true, // cria nome das colunas no padrão underscored
  },
};
