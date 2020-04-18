module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestemps: true,
    underscored: true,
    underscoredAll: true,
  },
};
