class CustomErrorAPI extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.status = statusCode;
  }
}

function createCustomError(msg, status) {
  return new CustomErrorAPI(msg, status);
}

module.exports = { createCustomError, CustomErrorAPI };
