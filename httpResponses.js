const success = (data) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      data,
    }),
  };
  return response;
};

const error = (code, message) => {
  const response = {
    statusCode: code,
    body: JSON.stringify({
      error: message,
    }),
  };
  return response;
};

module.exports = {
  success,
  error,
};
