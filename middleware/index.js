function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware function
}

function ngrokHeader(req, res, next) {
  res.setHeader("ngrok-skip-browser-warning", "true");
  next();
}

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
}

module.exports = {
  logger,
  ngrokHeader,
  errorHandler,
};
