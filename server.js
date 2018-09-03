const express = require('express');
const stencil = require('@stencil/core/server');

// create the express app
const app = express();

// load the stencil config and
// express serve-side rendering middleware
const { wwwDir, logger } = stencil.initApp({
  app: app,
  configPath: __dirname
});

// api routes
app.use('/api/add', require("./api/addContact"));
app.use('/api/edit', require("./api/editContact"));
app.use('/api/delete', require("./api/deleteContact"));

// serve static files
app.use(express.static(wwwDir));

// set which port express it will be listening on
const port = 3030;

// start listening and handling requests
app.listen(port, () => logger.info(`server-side rendering listening on port: ${ port }`));