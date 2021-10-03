const express = require('express');

const router = express.Router();

router.get('/route', function (req, res) {
    // const page = await UserService.getUsers(req.pagination);
    res.send(req.t('greeting'));
  })
module.exports = router;
