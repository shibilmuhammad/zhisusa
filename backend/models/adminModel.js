const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})
// Pre-save hook to hash the password before saving to database
adminSchema.pre('save', async function(next) {
    try {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(this.password, salt);
      this.password = passwordHash;
      next();
    } catch (error) {
      next(error);
    }
  });
  const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;