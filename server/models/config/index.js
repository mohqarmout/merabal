const Airtable = require('airtable');
require('dotenv').config();

const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

module.exports = base;
