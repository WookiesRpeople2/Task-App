const mongoose = require("mongoose");

const isValidMongoId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Document not found" });
  }
};

module.exports = isValidMongoId;
