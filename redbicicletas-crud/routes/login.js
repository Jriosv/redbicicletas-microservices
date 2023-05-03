var express = require('express');
var router = express.Router();
require('dotenv').config('./.env');


//Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    var token = req.body.token;

    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID, 
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
      }
    verify()
    .then(() => {
        res.cookie('session-token', token);
        res.send('success');
    }).catch(console.error);

});

module.exports = router;