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


export {
  index
}