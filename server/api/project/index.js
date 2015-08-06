'use strict';

var express = require('express');
var controller = require('./project.controller');
var auth = require('../../auth/auth.service');
var multer = require('multer');


var router = express.Router();

router.get('/',  auth.isAuthenticated(), controller.index);
router.get('/:id',  auth.isAuthenticated(), controller.show);
router.post('/',  auth.isAuthenticated(), controller.create);
router.post('/:id',  auth.isAuthenticated(), controller.update);
router.post('/:id/upload', multer({
dest: './uploads/',
changeDest: function(dest, req, res) {
   console.log(req.body)
    return dest
}
}),  controller.upload);

//router.put('/dashboard/:id', controller.update);
//router.patch('/dashboard/:id', controller.update);
//router.delete('/dashboard/:id', controller.destroy);

module.exports = router;
