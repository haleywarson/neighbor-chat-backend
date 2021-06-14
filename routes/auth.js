const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const authenticate = (request, response, next) => {
  const { authorization } = request.headers;
  // if no auth header, send error
  if (!authorization) {
    response.status(403).send({ error: "Bearer token must be present" });
  } else {
    // pull out the token from Bearer token
    const token = authorization.split(" ")[1];
    // make the secret a variable
    const secret = process.env.AUTH_SECRET;
    try {
      // decode token using secret and jwt
      const decoded_token = jwt.verify(token, secret);
      // grab user id from decoded token
      const { user_id } = decoded_token;
      // use id to query db and authenticate if there is one
      User.query()
        .findById(user_id)
        .then((existingUser) => {
          request.user = existingUser;
          next();
        });
    } catch (error) {
      // otherwise send error that token is bad
      response.status(403).send({ error: "Invalid token" });
    }
  }
};

module.exports = { authenticate };
