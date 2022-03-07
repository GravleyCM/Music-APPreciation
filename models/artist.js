import mongoose from "mongoose"

const Schema = mongoose.Schema

const artistSchema = new Schema ({
  bandName: String,
  genre: String,
  owner: {
    type: Schema.Types.ObjectId, "ref": "Profile"
  },
  // album: [albumSchema],
})

const Artist = mongoose.model("Artist", artistSchema)

export {
  Artist
}