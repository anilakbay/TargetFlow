const errorHandler = (err, req, res, next) => {
  // Set default status code to 500 if not specified
  const statusCode = res.statusCode || 500;

  // Respond with the status code and a JSON object containing the error message
  res.status(statusCode).json({
    message: err.message || "An unexpected error occurred.",
    // Conditionally show the stack trace only in non-production environments
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorHandler;
