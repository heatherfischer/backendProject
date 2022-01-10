const express = require('express');

const controller = require('../controllers/contactController');
const router = express.Router();

router.post('/add', controller.createContact);
router.get('/list', controller.listAllContacts);
router.get('/private', controller.listAllPrivate);
router.get('/commercial', controller.listAllCommercial);
router.patch('/update', controller.updateContact);
router.delete('/delete/:id', controller.deleteContact);


module.exports = router;
