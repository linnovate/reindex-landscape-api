module.exports = (function() {
  'use strict';
  var router = require('express').Router(),
    passport = require('passport'),
    requireAuth = passport.authenticate('jwt', { session: false }),
    landscapesCtrl = require('./controller');  
//   //   authCtrl = require('../controllers/auth');

  router.route('/')
    .get(landscapesCtrl.all)  
    .post(requireAuth, landscapesCtrl.create);//, authCtrl.roleAuthorization('Admin')
  router.route('/:landscapeId')
    .get(landscapesCtrl.get)
    .put(requireAuth, landscapesCtrl.update);//, authCtrl.roleAuthorization('Admin')

  return router;
})();