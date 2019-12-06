const { getCases } = require('../../models/queries/cases');

exports.getCase = async (_req, res, next) => {
  try {
    const buildings = await getCases();
    res.status(200).json({ data: buildings, statusCode: 200 });
  } catch (err) {
    next(err);
  }
};
