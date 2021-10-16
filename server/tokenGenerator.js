const jwt = require("jsonwebtoken");
require('dotenv').config();

function tokenGenerator(userID) {
    const payload = {
        user: {
            id : userID 
        }
    };
    return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1hr" })
}

module.exports = tokenGenerator;