import { Song } from "../models/song.js"

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

function createSong(req, res) {
  Song.create(req.body)
  .then(song => {
    res.redirect("/artists") //Fix this redirect
  })
  .catch(err => console.log(err))
}

export {
  index,
  createSong,
}