"use strict";

var Components = require('./components.js');

// Create a server instance
var server = Components('/components');

// Start the server listening..
// server.listen(process.env.SERVICE_PORT || 8888);
server.listen(process.env.PORT || 8888);
