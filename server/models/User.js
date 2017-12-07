const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: [
      'admin',
      'user',
    ],
    default: 'user'
 },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

//module.exports = mongoose.model("User", userSchema);
const User = mongoose.model('User', userSchema);
module.exports = User;
