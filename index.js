const http = require('http');
const { getGerichte } = require('./data');

const port = process.env.PORT || 3001;

const data = JSON.stringify(getGerichte());

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.end(data);
});

server.listen(port, (err) => {
    if(err) console.log("An Error occured: " + err);
    console.log("Server is listening on port " + port);
});