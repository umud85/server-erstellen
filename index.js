import { createServer } from 'http';
import { getGerichte } from './data.js';

const port = process.env.PORT || 3001;

const data = JSON.stringify(getGerichte());

const server = createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.end(data);
});

server.listen(port, (err) => {
    if(err) console.log("An Error occured: " + err);
    console.log("Server is listening on port " + port);
});