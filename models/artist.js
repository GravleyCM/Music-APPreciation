import mongoose from "mongoose"

const Schema = mongoose.Schema

const artistSchema = new Schema ({
  
})

const Artist = mongoose.model("Artist", artistSchema)

export {
  Artist
}