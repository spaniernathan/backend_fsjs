const router = require("express").Router();
const pool = require("./database");
const authen = require("./middlewareAuthorization");

router.get("/", authen, async(req, res) => {
    try {
        console.log("page home");
        // res.json(res.user);
        const user = await pool.query("SELECT username FROM users WHERE userID = $1", [req.user.id]);
        // modifier la db pour ajouter une userID
        // ajouter le check des infos

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error Server");
    }
});

module.exports = router;