const server = require('./server.js');

const port = process.env.port || 4000;

server.listen(port, () => console.log(`Running on port ${port}`));