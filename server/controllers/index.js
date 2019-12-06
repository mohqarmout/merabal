const router = require('express').Router();
const { getCase } = require('./getCase');
const { interCase } = require('./postCase');
const { mailList } = require('./mailList');

router.post('/report-case', interCase);
router.get('/get-case', getCase);
router.get('/mail-list', mailList);

module.exports = router;
