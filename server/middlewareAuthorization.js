const jwt = require("jsonwebtoken");
require("dotenv").config();

// verify if token is valid to continue navigation

module.exports = async(req, res, next) => {
    try {
        //        const token = req.header("token");
        //        const token = req.header("Authorization");

        // const token = req.header("Authorization");
        // console.log("header =" + token);
        const authHeader = req.headers.authorization;

        /// token undefined donc passe pas le if
        if (authHeader) {
            const token = authHeader.split(" ")[1];
            console.log("token = " + token);

            if (!token) {
                return res.status(403).send("Access Denied");
            }

            const payload = jwt.verify(token, process.env.jwtSecret);
            console.log("playload : " + payload);
            req.user = payload.user;
            console.log("req.user : " + req.user);
            next();
        }
    } catch (error) {
        console.error(error.message);
        return res.status(403).send("Access Denied");
    }
};