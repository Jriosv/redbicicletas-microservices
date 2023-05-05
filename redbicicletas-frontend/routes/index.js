var express = require('express');
var router = express.Router();

//Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = process.env.CLIENT_ID;
const client = new OAuth2Client(CLIENT_ID);

/* GET home page. */
router.get('/', function(req, res, next) {
  let user = {};
  res.render('index', { title: 'Express', user: user});
  //let token = req.cookies['session-token']
  /*
  async function verify() {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID, 
    });
    const payload = ticket.getPayload();
    user.name = payload.name;
    user.email = payload.email;
    user.picture = payload.picture;
  }
  verify()
  .then(() => {
      req.user = user;
      res.render('index', { title: 'Express', user: user});
  }).catch(err => {
    res.redirect('/login')
  });*/

});

module.exports = router;
