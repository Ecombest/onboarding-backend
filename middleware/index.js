function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware function
}

function errorHandler(err, req, res, next) {
  res.status(500).json({ message: "Internal Server Error" });
}

module.exports = {
  logger,
  errorHandler,
};
