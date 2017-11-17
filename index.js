'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.post('/message', (req, res) => db.create(req.body));
app.get('/message', (req, res) => db.read(req.query));

app.listen(3000);