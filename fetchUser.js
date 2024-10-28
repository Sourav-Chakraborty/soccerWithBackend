const jwt = require("jsonwebtoken");

const JWTSecret = process.env.JWTSecret;

const fetchUser = (token) => {
	const data = jwt.verify(token, JWTSecret);
	const email = data.user.email;
	return email;
};

module.exports = fetchUser;
