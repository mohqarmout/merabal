const yup = require('yup');

module.exports = yup.object({
  victimName: yup
    .string()
    .trim()
    .required(),
  email: yup
    .string()
    .email()
    .required(),
  phoneNumber: yup
    .number()
    .required()
    .test(
      'len',
      'Must be exactly 10 characters',
      val => val.toString().length === 10,
    ),
  age: yup
    .number()
    .min(16)
    .required(),
  address: yup
    .string()
    .trim()
    .required(),
  problem: yup.string().required(),
  approved: yup.bool().default(false),
  extraInfo: yup.string().default('N/A'),
  idNumber: yup
    .number()
    .required()
    .test(
      'len',
      'Must be exactly 10 characters for ID to be correct',
      val => val.toString().length === 10,
    ),
  ideaAboutScammer: yup
    .mixed()
    .oneOf(['Yeyes and I am suer', 'maybe, I might know', 'N/A'])
    .required(),
});
