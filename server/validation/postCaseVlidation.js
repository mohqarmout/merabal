const yup = require('yup');

module.exports = yup.object({
  firstname: yup
    .string()
    .trim()
    .required(),
  lastName: yup
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
});
