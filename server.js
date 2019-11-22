const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir'); 

// iniciando o app
const app = express();

// iniciando a DB
mongoose.connect('mongodb://localhost:27017/Candidato', { useNewUrlParser: true, useUnifiedTopology: true } );

requireDir('./src/models');

const User = mongoose.model('User');

// rotas
app.get('/', (req, res) => {
	
	return res.send('Página Inicial');
});

app.post('/add', (req, res) => {
	User.create({
		name: 'miludino',
		idade: '20',
		formacao: 'miludir',
	});
	return res.send('Cadastrado!')
});

app.listen(3001);