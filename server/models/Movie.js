import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: String,
  description: String,
  videoUrl: String,
  thumbnailUrl: String,
  genre: String,
  duration: String,
})

export default model("Movie", movieSchema)