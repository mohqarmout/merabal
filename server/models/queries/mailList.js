const base = require('../config');

exports.addMail = email => {
  return base('mailing_list').create([{ fields: { email } }]);
};

exports.getEmails = async () => {
  let records = [];

  const processPage = (partialRecords, fetchNextPage) => {
    records = [...records, ...partialRecords.map(r => r.get('email'))];
    fetchNextPage();
  };

  await base('mailing_list')
    .select({ view: 'Grid view' })
    .eachPage(processPage);

  return records;
};
