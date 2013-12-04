var Server = require('./server');
var Client = require('./client');

// Combine Server and Client
exports = module.exports = Jobs;

function Jobs(db, worker, options) {
  return mixin(Server(db, worker, options), Client.Queue.prototype);
}

Jobs.Server = Server;
Jobs.Client = Client;

function mixin(a, b) {
  var target = Object.create(a); // avoids modifying original
  Object.keys(b).forEach(function(key) {
    target[key] = b[key];
  });
  return target;
}
