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

function addSong(res, req) {
  console.log("X!X!X!X!", req.body)
  // Song.create(req.body)
  // .then(song => {
  //   res.render("artists/album")
  // })
  // .catch(err => console.log(err))
}

export {
  index,
  addSong
}