import { Schema, model } from "mongoose";

const sessionSchema = new Schema({
  sessionToken: {
    type: String,
    unique: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  expires: Date,
});

export default model('Session', sessionSchema);