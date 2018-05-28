
'use strict';

var express = require('express'),
  passport = require('passport'),
  requireAuth = passport.authenticate('jwt', { session: false }),
  router = express.Router(),
  
  landscapesCtrl = require('./controller');  
//   authCtrl = require('../controllers/auth');

/*
 Landscape functions
 */
router.route('/landscape')
  .get(landscapesCtrl.all)  
  .post(requireAuth, landscapesCtrl.create);//, authCtrl.roleAuthorization('Admin')
router.route('/landscape/:landscapeId')
  .get(landscapesCtrl.get)
  .put(requireAuth, landscapesCtrl.update);//, authCtrl.roleAuthorization('Admin')


module.exports = router;
