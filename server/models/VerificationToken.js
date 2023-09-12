import { Schema, model } from "mongoose";

const verificationTokenSchema = new Schema({
  identifier: String,
  token: {
    type: String,
    unique: true,
  },
  expires: Date,
});

export default model('VerificationToken', verificationTokenSchema);


