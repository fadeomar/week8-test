const connection = require('../config/connection');

const addCity = userData => {
  const { name, country } = userData;
  const sql = {
    text: 'INSERT INTO city (name, country) VALUES ($1, $2);',
    values: [name, country],
  };
  return connection.query(sql);
};

module.exports = {
  addCity,
};
