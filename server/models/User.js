import { Schema, model } from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new Schema({
  name: String,
  image: String,
  email: {
    type: String,
    unique: true,
  },
  emailVerified: Date,
  hashedPassword: String,
  accounts: [{ type: Schema.Types.ObjectId, ref: 'Account' }],
  sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }],
  favoriteIds: [String],
}, { timestamps: true });


//Methods

//password encryption
userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt)
}

//Validate password
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.hashedPassword);
}

export default model("User", userSchema)


