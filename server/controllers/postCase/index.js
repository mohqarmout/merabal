const { getCases, postCase } = require('../../models/queries/cases');
const { postCaseVlidation } = require('../../validation/index');

exports.enterVictim = async (req, res, next) => {
  const { data } = req.body;
  try {
    const newCase = await postCaseVlidation.validate(data, {
      abortEarly: false,
    });

    const cases = await getCases();
    const idExist = cases.find(victim => {
      return newCase.idNumber === victim.idNumber;
    });
    if (idExist) {
      res
        .status(409)
        .send({ statusCode: 409, message: 'victim already exist' });
    } else {
      await postCase(newCase);
      res.status(201).send({
        statusCode: 201,
        message: 'victum was added successfully',
        data: newCase,
      });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    if (error.name === 'ValidationError') {
      res.status(400).send({ statusCode: 400, error: error.errors });
    } else next(error);
  }
};
