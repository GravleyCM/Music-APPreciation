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
	req.body.tasty = !!req.body.tasty
  Artist.create(req.body)
  .then(artist => {
    res.redirect("/artists")
  })
  .catch(err => {
    console.log(err)
  })
}

export {
  index,
  create,
}