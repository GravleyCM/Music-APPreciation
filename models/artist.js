import mongoose from "mongoose"

const Schema = mongoose.Schema

const artistSchema = new Schema ({
  name: String,
  genre: String,
  album: [albumSchema,]
})

const Artist = mongoose.model("Artist", artistSchema)

export {
  Artist
}