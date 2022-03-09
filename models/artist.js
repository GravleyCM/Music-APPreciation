import mongoose from "mongoose"

const Schema = mongoose.Schema

const albumSchema = new Schema ({
  albumName: String,
  songs: [{
    type: Schema.Types.ObjectId, ref: "Song"
  }],
}, {
  timestamps: true
})

const artistSchema = new Schema ({
  bandName: String,
  genre: String,
  owner: {
    type: Schema.Types.ObjectId, ref: "Profile"
  },
  albums: [albumSchema],
  songs: [{
    type: Schema.Types.ObjectId, ref: "Song"
  }]
}, {
  timestamps: true
})

const Artist = mongoose.model("Artist", artistSchema)

export {
  Artist
}