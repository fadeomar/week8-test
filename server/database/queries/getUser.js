const connection = require("../config/connection");

const getUser = email => {
  const sql = {
    text: "SELECT * FROM user WHERE email LIKE ($1);",
    values: [email]
  };
  return connection.query(sql);
};

module.exports = { getUser };
