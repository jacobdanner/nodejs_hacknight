var express = require('express')
var app = express();

app.get('/', function(req, res)
        {
        res.send('Hello world via Express');
        });

app.listen(3000);
console.log("Express listening on port 3k");
