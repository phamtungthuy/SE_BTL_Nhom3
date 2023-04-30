const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('go10ngon', 'root', 'nghia1234567&', {
  dialect: 'mysql',
  port: '3308'
});

sequelize.query('SELECT * FROM paragraphs', { type: Sequelize.QueryTypes.SELECT })
  .then(users => {
    console.log(users);
  })
  .catch(error => {
    console.error(error);
  });
