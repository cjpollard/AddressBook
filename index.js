const express = require('express');
const app = express();
const server = require("http").createServer(app);

app.use('/api/add', require("./api/addContact"));
app.use('/api/edit', require("./api/editContact"));
app.use('/api/delete', require("./api/deleteContact"));

server.listen((process.env.PORT || 3000), () => console.log('Listening on port 3000!'));