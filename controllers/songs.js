import { Song } from "../models/song.js"
import  { Artist } from "../models/artist.js"

function addSong(res, req) {
  console.log(req.body);
  Song.create(req.body)
  .then(song => {
    res.render("/artists/album")
  })
  .catch(err => console.log(err))
}

export {
  addSong
}