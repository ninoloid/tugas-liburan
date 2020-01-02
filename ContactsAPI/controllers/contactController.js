'use strict';
const Model = require('../models');
const Contact = Model.Contact;

class ContactController {
  static addContact(req, res) {
    const contact = {
      name: req.body.name,
      phone: req.body.phone
    }
    Contact.create(contact)
      .then(() => res.redirect('/api/contacts'))
      .catch(err => res.send(err.message))
  }

  static showContact(req, res) {
    Contact.findOne({ where: { id: req.params.id } })
      .then(result => res.send(result))
      .catch(err => res.send(err.message))
  }

  static showContacts(req, res) {
    Contact.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
      .then(results => res.send(results))
      .catch(err => res.send(err.message))
  }

  static updateContact(req, res) {
    const contact = {
      name: req.body.name,
      phone: req.body.phone
    }
    Contact.update(contact, { where: { id: req.params.id } })
      .then(() => res.redirect('/api/contacts/' + req.params.id))
      .catch(err => res.send(err.message))
  }

  static deleteContact(req, res) {
    Contact.destroy({ where: { id: req.params.id } })
      .then(() => res.redirect('/api/contacts'))
      .catch(err => res.send(err.message))
  }
}

module.exports = ContactController;