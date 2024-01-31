const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const generateToken = (user) => {
  return jwt.sign(user.toJSON(), process.env.JWT_SECRET_KEY , {
    expiresIn: "24h",
  });
};

module.exports = generateToken;
