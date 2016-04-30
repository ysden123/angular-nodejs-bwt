// Server
'use strict';

const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, 'public');

// Ignore /favicon.ico
app.use((req, res, next) => {
    if (req.url === '/favicon.ico') {
        res.end();
    } else {
        next();
    }
});

// Logging
app.use((req, res, next) => {
    console.log(`In comes a request to: ${req.url}`);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(publicPath, "index.html"));
});

// Handling files from public folder.
app.use(express.static(publicPath));


app.use((req, res) => {
    res.statusCode = 404;
    res.end('404!');
});

app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
