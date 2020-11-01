const express = require('express');
const birds = require('./BasicRouting/birds');
const routing = require('./BasicRouting/routing');
const path = require("path");
const app = express();
const port = 3000;

app.use('/', routing);
app.use('/birds', birds);
app.use('/static', express.static(__dirname + '/ServingStatic'));
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "ServingStatic", "index.html"));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})