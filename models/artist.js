import mongoose from "mongoose"

const Schema = mongoose.Schema

const albumSchema = new Schema ({
  albumName: String,
  song: [songSchema],
}, {
  timestamps: true
})

const artistSchema = new Schema ({
  bandName: String,
  genre: String,
  owner: {
    type: Schema.Types.ObjectId, "ref": "Profile"
  },
  album: [albumSchema],
}, {
  timestamps: true
})

const Artist = mongoose.model("Artist", artistSchema)

export {
  Artist
}