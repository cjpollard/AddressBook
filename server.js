const express = require('express');
const stencil = require('@stencil/core/server');
const body_parser = require("body-parser");
// const router = require('express').Router();
const path = require('path');

// create the express app
const app = express();
const server = require("http").createServer(app);


app.use(body_parser.json({limit: "5mb"}));
app.use(body_parser.urlencoded({ extended: true }));

app.post('/api/add', require('./api/addContact'));
app.post('/api/delete', require('./api/deleteContact'));
app.post('/api/edit', require('./api/editContact'));
app.get('/api/get', require('./api/getContacts'));

// load the stencil config
const config = stencil.loadConfig(__dirname);

// serve-side render html pages
app.use(stencil.ssrPathRegex, stencil.ssrMiddleware({ config }));

// serve all static files from www directory
app.use(express.static(path.join(__dirname, 'www')));

// set which port express it will be listening on
const port = process.env.PORT || 3030;

// start listening and handling requests
server.listen(port, () => console.log(`server-side rendering listening on port: ${ port }`));