const express = require('express');
const favicon = require('express-favicon');
const routes = require('./routes/index');
const metrics = require('./ajax/metrics.js');
var bodyParser = require('body-parser')

const app = express();
const port = 8080;



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.svg'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))

app.get('/metrics.json', (req, res) => {
    console.log("HERE")
    metrics.get((err, data) => {
        console.log(data)
        if (err) throw err
        res.status(200).json(data)
    })
})

app.route("/home")
    .get(routes.getHomePage)
app.route("/hello")
    .post(routes.postName)
app.route("/hello/:name")
    .get(routes.getHelloPage)
app.get('*', function(req, res) {
    res.redirect('/home');
});

app.listen(port);
console.log("Listening on port " + port);