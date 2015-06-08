var path = require('path');
var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/another", function (req, res) {
    res.send('<h3>Another page on the same domain</h3>');
});


app.get("/rand/0", function (req, res) {
    var rand = getRandomInt(1, 1000);
    var cacheControl = '';
    res.json({ rand: rand, cache_control: cacheControl });
});

app.get("/rand/1", function (req, res) {
    var rand = getRandomInt(1, 1000);
    var cacheControl = 'private, max-age=0, no-cache';
    res.set('Cache-Control', cacheControl);
    res.json({ rand: rand, cache_control: cacheControl });
});

app.get("/rand/2", function (req, res) {
    var rand = getRandomInt(1, 1000);
    var cacheControl = 'no-cache, no-store';
    res.set('Cache-Control', cacheControl);
    res.json({ rand: rand, cache_control: cacheControl });
});

app.listen(5000, function () {
    console.log('Listening on port 5000');
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
