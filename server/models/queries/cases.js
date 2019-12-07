const camelcaseKeys = require('camelcase-keys');

const base = require('../config');

exports.postCase = ({
  firstname,
  lastName,
  email,
  phoneNumber,
  address,
  age,
  problem,
  idNumber,
  extraInfo,
}) => {
  return base('victims').create([
    {
      fields: {
        first_name: firstname,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        address,
        age,
        problem,
        id_number: idNumber,
        extra_info: extraInfo,
      },
    },
  ]);
};

exports.getCases = async () => {
  let allRecords = [];
  const process = (records, fetchNextPage) => {
    allRecords = [
      ...allRecords,
      ...records.map(record => ({ id: record.id, ...record.fields })),
    ];
    fetchNextPage();
  };

  await base('victims')
    .select({ view: 'Grid view' })
    .eachPage(process);
  return camelcaseKeys(allRecords);
};
