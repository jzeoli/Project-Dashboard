'use strict';

var express = require('express');
var controller = require('./project.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/',  auth.isAuthenticated(), controller.index);
router.get('/:id',  auth.isAuthenticated(), controller.show);
router.post('/',  auth.isAuthenticated(), controller.create);

//router.put('/dashboard/:id', controller.update);
//router.patch('/dashboard/:id', controller.update);
//router.delete('/dashboard/:id', controller.destroy);

module.exports = router;
