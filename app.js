const express = require('express');
const birds = require('./BasicRouting/birds');
const routing = require('./BasicRouting/routing');
const app = express();
const port = 3000;

app.use('/', routing);
app.use('/birds', birds);




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})