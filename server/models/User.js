const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// создание схемы пользователя, тут я позже добавлю имя и фамилию
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['student', 'teacher'],
    default: 'student'
  },
  results: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Test',
    default: []
  }
});

// Ниже идёт кодирование пароля
//
//
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
