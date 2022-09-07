const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html')); 
    //__dirname : It will resolve to your project folder.
})

app.get("/countdown", (req, res, next) => {
    const christmas = new Date("December 25, 2022 00:00:00");
    const today = new Date();
    const diff = christmas - today;
    const days = Math.floor(diff / (24 * 60 * 60000))
    const hours = Math.floor(diff / (60 * 60000)) - (days * 24);
    const mins = Math.floor(diff / 60000) - (days * 24 * 60 + hours * 60);
    const secs = Math.floor(diff / 1000) - (days * 24 * 60 * 60 + hours * 60 * 60 + mins * 60)
    const ms  = Math.floor(diff) - (days * 24 * 60 * 60000 + hours * 60 * 60000 + mins * 60000 + secs * 1000);
    res.json({
        christmas, today, days, hours, mins, secs, ms
    })
});

//add the router 
app.use('/', router);
app.listen(process.env.port || 8080);
console.log("Server running on port 8080");


