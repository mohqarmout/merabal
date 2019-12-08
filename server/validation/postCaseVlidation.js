const yup = require('yup');

module.exports = yup.object({
  victimName: yup // 1
    .string()
    .trim()
    .required(),
  email: yup // 1
    .string()
    .email()
    .required(),
  phoneNumber: yup.number().required(),
  age: yup.number().required(),
  address: yup.string().default('N/A'),
  problem: yup.string().required(),
  approved: yup.bool().default(false),
  extraInfo: yup.string().default('N/A'),
  idNumber: yup.number().required(),
  ideaAboutScammer: yup // 1
    .mixed()
    .required(),
});
