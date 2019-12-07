const { addMail, getEmails } = require('../../models/queries/mailList');
const { emailValidation } = require('../../validation/');

exports.mailList = async (req, res, next) => {
  const { email } = req.query;

  try {
    await emailValidation.validate({ email });
    const allEmails = await getEmails();
    const isExist = allEmails.includes(email);

    if (isExist) {
      res.send({
        statusCode: 200,
        message: 'Email already exists',
        data: { email },
      });
    } else {
      await addMail(email);

      res.status(201).send({
        statusCode: 201,
        message: 'Email is added successfully',
        data: { email },
      });
    }
  } catch (err) {
    if (err.name === 'ValidationError')
      res.status(400).send({ statusCode: 400, error: 'Invalid email address' });
    else next(err);
  }
};
