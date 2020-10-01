const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/', (req, res) => {
    res.send('Got a Post request');
})

app.put('/user', (req, res) => {
    res.send('Got a Put request at /user');
})

app.delete('/user', (req, res) => {
    res.send('Got a Delete request at /user');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})