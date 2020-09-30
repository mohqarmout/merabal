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
    .string()
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/,
      'Must be a valid phone number',
    )
    .required(),
  age: yup
    .number()
    .moreThan(16, 'Must be older than 16')
    .required(),
  address: yup.string().default('N/A'),
  problem: yup.string().required(),
  approved: yup.bool().default(false),
  extraInfo: yup.string().default('N/A'),
  idNumber: yup
    .string()
    .matches(/^[0-9]{13}$/, 'Must be a valid Id number')
    .required(), // set the regex
  ideaAboutScammer: yup.mixed().required(),
});
