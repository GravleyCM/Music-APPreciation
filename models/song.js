import mongoose from "mongoose"

const Schema = mongoose.Schema

const songSchema = new Schema ({
  songTitle: String,
}, {
  timestamps: true
})

const Song = mongoose.model("Song", songSchema)

export {
  Song
}
