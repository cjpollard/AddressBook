const router = require('express').Router();

router.post('/api/add', require('./addContact'));
router.post('/api/delete', require('./deleteContact'));
router.post('/api/edit', require('./editContact'));
router.get('/api/get', require('./getContacts'));

module.exports = router;