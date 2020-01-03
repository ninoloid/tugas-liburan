'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false }));
app.use('/api/contacts', require('./router/contactRouter'));

app.listen(port, () => console.log('express is running on port', port));