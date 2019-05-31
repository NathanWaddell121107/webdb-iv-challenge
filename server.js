const express = require('express');

// const dishRouter = require('./routers/dishRouter');

const server = express();

server.use(express.json());
// server.use('/api/dishes', dishRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: 'testing'})
});

module.exports = server;