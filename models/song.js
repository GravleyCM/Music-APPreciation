import mongoose from "mongoose"

const Schema = mongoose.Schema

const songSchema = new Schema ({
  songTitle: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

const Song = mongoose.model("Song", songSchema)

export {
  Song
}
