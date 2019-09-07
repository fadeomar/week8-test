const connection = require("../config/connection");

const addUser = userData => {
  const { email, password } = userData;
  const sql = {
    text: "INSERT INTO user (email, user_password) VALUES ($1, $2);",
    values: [email, password]
  };
  return connection.query(sql);
};

module.exports = { addUser };
