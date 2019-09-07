const { join } = require("path");
const { compare } = require("bcryp");
const { sign } = require("jsonwebtoken");

const { getUser } = require("../database/queries/getUser");

exports.renderLogin = (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "login.html"));
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  const key = process.env.KEY;
  let id;
  getUser(email)
    .then(res => {
      console.log(res.rows);
      if (res.rows.length === 0) {
        throw new Error("Please check uername");
      } else {
        id = res.rows[0].id;
        return compare(password, res.rows[0].user_password);
      }
    })
    .then(result => {
      if (result) {
        let token = sign({ email: email }, key);
        res.cookie("token", token, { maxAge: 86400000, httpOnly: true });
        res.redirect("/cities");
      } else {
        throw new Error("Wrong Password");
      }
    })
    .catch(err => {
      if (err.message == "Please check uername") res.send(err.message);
      else if (err.message === "Wrong Password") res.send(err.message);
      else next(err);
    });
};
