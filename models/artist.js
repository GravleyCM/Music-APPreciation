import mongoose from "mongoose"

const Schema = mongoose.Schema

const albumSchema = new Schema ({
  albumName: {
    type: String,
    required: true,
  },
  songs: [{
    type: Schema.Types.ObjectId, ref: "Song"
  }],
}, {
  timestamps: true
})

const artistSchema = new Schema ({
  bandName: {
    type: String,
    unique: true,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
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