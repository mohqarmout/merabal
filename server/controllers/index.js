const router = require('express').Router();
const { getCase } = require('./getCase');
const { enterVictim } = require('./postCase');
const { mailList } = require('./mailList');

router.post('/enter-victim', enterVictim);
router.get('/get-victim', getCase);
router.get('/mail-list', mailList);

module.exports = router;
