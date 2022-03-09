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
  res.render("artists/songs", {
    title: "Song List"
  })
}

function addSong(req, res)  {
  Artist.findById(req.params.id)
  .then(artist => {
    artist.albums.songs.push(req.body.songId)
    artist.save()
  .then(() => res.redirect(`/artists/${req.params.id}`))
  })
}

function edit(req, res) {
  Artist.findById(req.params.id)
  .then(artist => {
    res.render('artists/edit', {
      artist,
      title: "Edit Artist"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/artists')
  })
}

function update(req, res) {
  Artist.findById(req.params.id)
  .then(artist => {
    if (artist.owner.equals(req.user.profile._id)) {
      artist.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/artists/${artist._id}`)
      })
    } else {
      throw new Error ('Not correct user')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/artists`)
  })
}

export {
  index,
  create,
  show,
  deleteArtist as delete,
  addAlbum,
  showSongs,
  addSong,
  edit,
  update,
}