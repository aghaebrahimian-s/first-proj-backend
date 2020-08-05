const db = require('../db')

const userSchema = new db.Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 6,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 10,
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'active', 'blocked'],
      default: 'pending',
    },
    role: {
      type: String,
      required: true,
      enum: ['subscriber', 'author', 'editor', 'admin', 'super_admin'],
      default: 'subscriber',
    },
  },
  {
    timestamps: true,
  }
)

const User = db.model('user', userSchema)

module.exports = User
