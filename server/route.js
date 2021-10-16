const router = require("express").Router();
const pool = require("./database");
const bcrypt = require("bcrypt");
const jwtGen = require("./tokenGenerator");
const authen = require("./middlewareAuthorization");

// registering

router.post("/register", async(req, res) => {
    try {
        // step 1 get email username pwd from req.body

        const { username, password, email } = req.body;

        // step 2 check if user already exit

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [
            email,
        ]);

        if (user.rows.length !== 0) {
            return res.status(401).send("email address already used"); // 401 for Unauthorized
        }

        // res.json(user.rows); test postman

        // step 3 encrypt pwd using bcrypt library

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);

        const bcryptPwd = await bcrypt.hash(password, salt);

        // step 4 enter user info in db

        const newUser = await pool.query(
            "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *", [username, bcryptPwd, email]
        );

        //res.json(newUser.rows[0]);
        // step 5 create token

        const token = jwtGen(newUser.rows[0].userID);
        return res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("error Server");
    }
});

// login

router.post("/login", async(req, res) => {
    try {
        // step 1 get email username pwd from req.body

        const { username, password } = req.body;

        // step 2 check if user exist

        const user = await pool.query("SELECT * FROM users WHERE username = $1", [
            username,
        ]);

        if (user.rows.length === 0) {
            return res
                .status(401)
                .send("Authentification failed, incorrect password or username"); // 401 for unauthorized
        }

        // step 3 compare pwd

        const validPwd = await bcrypt.compare(password, user.rows[0].password);
        // console.log(password);
        // console.log(user.rows[0].password);

        // console.log(validPwd);
        if (validPwd === false) {
            return res.status(401).send("incorrect password");
        }

        // step 4 give token

        console.log(user.rows[0].userID);
        const token = jwtGen(user.rows[0].userID);
        console.log("token after login: " + token);
        return res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("error Server");
    }
});

router.get("/verified", authen, async(req, res) => {
    try {
        res.json(true);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error Server");
    }
});

module.exports = router;