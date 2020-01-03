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
      .then(() => res.status(201).json({ msg: 'contact successfully created' }))
      .catch(err => res.status(405).json({ msg: err.message }))
  }

  static showContact(req, res) {
    Contact.findOne({ where: { id: req.params.id } })
      .then(result => {
        if (result) res.send(result)
        else throw new Error('not found')
      })
      .catch((err) => res.status(404).json({ msg: err.message }))
  }

  static showContacts(req, res) {
    Contact.findAll({
      order: [
        ['id', 'DESC']
      ]
    })
      .then(results => {
        if (results) res.send(results)
        else throw new Error('contact list is empty')
      })
      .catch((err) => res.status(404).json({ msg: err.message }))
  }

  static updateContact(req, res) {
    const contact = {
      name: req.body.name,
      phone: req.body.phone
    }
    Contact.update(contact, { where: { id: req.params.id } })
      .then(() => res.status(202).json({ msg: 'contact successfully updated' }))
      .catch(err => res.status(405).json({ msg: err.message }))
  }

  static deleteContact(req, res) {
    Contact.destroy({ where: { id: req.params.id } })
      .then(() => res.status(202).json({ msg: 'contact successfully deleted' }))
      .catch(err => res.send(err.message))
  }
}

module.exports = ContactController;