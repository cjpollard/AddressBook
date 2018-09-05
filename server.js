const express = require('express');
const stencil = require('@stencil/core/server');

// create the express app
const app = express();
const server = require("http").createServer(app);


// load the stencil config and
// express serve-side rendering middleware
const { wwwDir, logger } = stencil.initApp({
  app: app,
  configPath: __dirname
});

app.use('/*', (req, res, next) => {
  next();
});
// api routes
app.use('/api', require('./api/controller'));

// serve static files
app.use(express.static(wwwDir));

// set which port express it will be listening on
const port = 3030;

// start listening and handling requests
server.listen(port, () => logger.info(`server-side rendering listening on port: ${ port }`));