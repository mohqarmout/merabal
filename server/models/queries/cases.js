const camelcaseKeys = require('camelcase-keys');

const base = require('../config');

exports.postCase = ({
  victimName,
  email,
  phoneNumber,
  address,
  age,
  problem,
  idNumber,
  extraInfo,
  ideaAboutScammer,
}) => {
  return base('victims').create([
    {
      fields: {
        idea_about_scammer: ideaAboutScammer,
        victim_name: victimName,
        email,
        phone_number: Number(phoneNumber),
        address,
        age,
        problem,
        id_number: Number(idNumber),
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
