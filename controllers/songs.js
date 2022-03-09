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

// function create(req, res) {
//   req.body.owner = req.user.profile._id
//   Artist.create(req.body)
//   .then(artist => {
//     res.redirect("/artists")
//   })
//   .catch(err => console.log(err))
// }

function createSong(req, res) {
  Song.create(req.body)
  .then(song => {
    res.redirect("/artists/songs")
  })
  .catch(err => console.log(err))
}

function addSong(req, res)  {
Artist.findById(req.params.id)
.then(artist => {
  artist.album.song.push(req.body)
  artist.save()
  .then(() => {
    res.redirect("artists/songs")
  })
})
.catch(err => console.log(err))
}

// function addAlbum(req, res) {
//   Artist.findById(req.params.id)
//   .then(artist => {
//     artist.albums.push(req.body)
//     artist.save()
//     .then(() => {
//       res.redirect(`/artists/${req.params.id}`)
//     })
//   })
//   .catch(err => console.log(err))
// }

export {
  index,
  createSong,
  // addSong
}