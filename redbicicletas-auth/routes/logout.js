var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.clearCookie('session-token');
    res.redirect(308,'login');
});

module.exports = router;