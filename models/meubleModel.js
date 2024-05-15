const mongoose = require("mongoose");

const meubleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "meuble must have a name"],
  },
  category: {
    type: String,
    enum: ["Armoire", "Étagère"],
    required: true,
  },
  description: {
    type: String,
  },
  matériaux: {
    type: String,
  },
  fournisseur: {
    type: String,
  },
});
const Meuble = mongoose.model("Meuble", meubleSchema);

module.exports = Meuble;
