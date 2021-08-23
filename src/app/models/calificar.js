const mongoose = require("mongoose");
const { Schema } = mongoose;


const calificarShcema = new Schema(
    {
      evaluationDocumentId: { type: String, required: false },
      evaluationDocumentUserId: { type: String, required: false },
      evaluationDocumentDate: { type: Date, default: Date.now },
      evaluationDocumentStructure: { type: String, required: false},
      evaluationDocumentCoherence: { type: String, required: false},
      evaluationDocumentAuthorship: { type: String, required: false},
      evaluationDocumentTypeOfFonts: { type: String, required: false},
      evaluationDocumentUtility: { type: String, required: false},
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

module.exports = mongoose.model("Calificar", calificarShcema);

