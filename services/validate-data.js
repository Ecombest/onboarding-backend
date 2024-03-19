const validateData = (model) => {
  return (req, res, next) => {
    const autoAllowedFields = ["id", "createdAt", "updatedAt"];
    const requiredFields = Object.values(model.rawAttributes)
      .filter((attr) => attr.allowNull === false)
      .map((attr) => attr.field)
      .filter((field) => !autoAllowedFields.includes(field));
    const missingFields = requiredFields.filter((field) => !req.body[field]);
    if (missingFields.length) {
      res.status(400).json({ message: `Missing required fields: ${missingFields.join(", ")}` });
      return;
    }
    next();
  };
};

module.exports = validateData;
