const express = require('express');
const User = mongoose.model('User');
const app = express();

app.get('/', (req, res) => {
	
	return res.send('Página Inicial');
});

app.post('/adduser', (req, res) => {
	User.create({
		name: 'miludino',
		idade: '20',
		formacao: 'miludir',
	});
	return res.send('Cadastrado!')
});

app.listen(3001);