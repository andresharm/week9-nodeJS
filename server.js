const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response) =>{       //  '/' näitab, et pealeht
    console.log(__dirname + '/index.html');
    response.sendFile(__dirname + '/index.html');
});

app.get('/about', (reqest, response) =>{
    response.send('Hello, I am Andres.')
});
app.listen(3000, ()=>{
    console.log('Server is running on Port 3000.');
});