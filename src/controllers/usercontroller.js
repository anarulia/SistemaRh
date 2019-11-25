const express = require('express');
router = express.Router();
const requireDir = require('require-dir');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Candidato', { useNewUrlParser: true, useUnifiedTopology: true } );

requireDir('../models')
const User = mongoose.model('User');

router.get('/', (req, res) => {
	return res.send('Página Inicial');
});

router.post('/adduser', (req, res) => {
	User.create({
		name: 'miludino',
		idade: '20',
		formacao: 'miludir',
	});
	return res.send('Cadastrado!')
});
