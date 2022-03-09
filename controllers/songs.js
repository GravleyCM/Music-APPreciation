import { Song } from "../models/song.js"
import { Artist } from "../models/artist.js"

function index(req, res) {
  Song.find({})
  .then(songs => {
    res.render("artists/songs", {
      songs,
      title: "Song List"
    })
  })
  .catch(err => console.log(err))
}

function addSong(res, req) {
  console.log("X!X!X!X!", req.params.id)
  Artist.findById(req.params.id)
  .then(album => {
    album.songs.push(req.body)
    album.save()
    .then(() => {
      res.redirect(`/artists/${req.params.id}`)
    })
  })
  .catch(err => console.log(err))
}

export {
  index,
  addSong
}