// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, _next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  const { statusCode = 500 } = err;
  let message = '';
  switch (statusCode) {
    case 413:
      message = 'You exceeded the maximum allowed payload size.';
      break;
    default:
      message = 'Internal Server Error';
  }
  res.status(statusCode).send({ statusCode, error: message });
};
