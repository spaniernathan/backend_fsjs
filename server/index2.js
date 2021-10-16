const express = require("express");
const cors = require("cors");
const Pool = require('pg').Pool;

const app = express();

app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: '0.0.0.0',
    database: 'test',
    password: 'postgres',
    port: 5432,
});

app.post("/register", (req, res) => {

    const username = req.body.username
    const password = req.body.password

    pool.query(
        "INSERT INTO utilisateur (username, password) VALUES ('?','?')", [username, password],
        console.log({ username, password })
        // (err, result) => {
        //     console.log(err);
        // }
    );
});

app.listen(3001, () => {
    console.log("running server");
});