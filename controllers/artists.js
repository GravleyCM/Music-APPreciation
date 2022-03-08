import { Artist } from "../models/artist.js"

function index(req, res) {
  Artist.find({})
  .then(artists => {
    res.render("artists/index", {
      artists,
      title: "All Artists"
    })
  })
  .catch(err => console.log(err))
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  console.log(req.body);
  Artist.create(req.body)
  .then(artist => {
    res.redirect("/artists")
  })
  .catch(err => console.log(err))
}

function show(req, res) {
  Artist.findById(req.params.id)
  .populate("owner")
  .then(artist => {
    res.render("artists/show", {
      artist,
      title: `${artist.bandName}`
    })
  })
  .catch(err => {
    console.log(err)
    res.render(err)
  })
}

function deleteArtist(req, res) {
  Artist.findByIdAndDelete(req.params.id, function(err, artist) {
  res.redirect("/artists")
  })
}

function addAlbum(req, res) {
  Artist.findById(req.params.id)
  .then(artist => {
    artist.albums.push(req.body)
    artist.save()
    .then(() => {
      res.redirect(`/artists/${req.params.id}`)
    })
  })
  .catch(err => console.log(err))
}

function showSongs(req, res) {
  
}

export {
  index,
  create,
  show,
  deleteArtist as delete,
  addAlbum,
}