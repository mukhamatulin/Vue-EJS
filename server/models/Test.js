const mongoose = require('mongoose');

//создание схемы сохранения результатов теста

const testSchema = new mongoose.Schema({
  module: { type: String, required: true },
  score: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Test', testSchema);
