'use strict';
const express = require('express');
const contactRouter = express.Router();
const Contact = require('../controllers/contactController')

contactRouter.get('/', Contact.showContacts);
contactRouter.post('/', Contact.addContact);
contactRouter.get('/:id', Contact.showContact);
contactRouter.patch('/:id', Contact.updateContact);
contactRouter.get('/:id/delete', Contact.deleteContact);
module.exports = contactRouter;