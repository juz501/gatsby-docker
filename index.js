var express = require('express'); 
var compression = require('compression');
var sslRedirect = require('heroku-ssl-redirect');

var app = express();
app.use(sslRedirect());

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        return false;
    }
    return compression.filter(req, res);
}
app.use(compression({ filter: shouldCompress }));

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);