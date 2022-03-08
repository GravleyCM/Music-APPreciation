import mongoose from "mongoose"

const Schema = mongoose.Schema

const songSchema = new Schema ({
  title: String,
  reviews: {
    type: Schema.Types.ObjectId, "ref": "Review"
  }
}, {
  timestamps: true
})

const Song = mongoose.model("Song", songSchema)

export {
  Song
}
