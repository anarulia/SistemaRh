const express = require('express');
const app = express();

require('./controllers/usercontroller');

app.listen(3001);
