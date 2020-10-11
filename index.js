const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
	console.log('Servidor levantado http://localhost:3000');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/register', (req, res) => {
	res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/views/login.html');
});
