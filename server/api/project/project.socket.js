
'use strict';

var project = require('./project.model');

exports.register = function(socket) {
  project.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  project.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('project:save', doc);

}

function onRemove(socket, doc, cb) {
  socket.emit('project:remove', doc);
}
