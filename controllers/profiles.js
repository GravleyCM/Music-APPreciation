import { Profile } from "../models/profile.js"
import { Artist } from "../models/artist.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render("profiles/index",  {
      profiles,
      title: "User Profiles"
    })
  })
  .catch(err => {
    console.log(err)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate("favArtist")
  .then((profile) => {
    Artist.find({})
    .then(artists => {
      Profile.findById(req.user.profile._id)
      .then(self => {
        const isSelf = self._id.equals(profile._id)
        res.render("profiles/show", {
          title: `${profile.name}'s profile`,
          profile,
          artists,
          self,
          isSelf,
        })
      })
    })
    .catch(err => console.log(err))
  })
  .catch((err) => console.log(err))
}

function addFavArtist(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile =>  {
    Artist.find({bandName: req.body.favArtist})
      .then(result => {
        console.log(result)
        profile.favArtist.push(result[0]._id)
        profile.save()
        .then(() => res.redirect(`/profiles/${req.user.profile._id}`))
      })
  })
}

export {
  index,
  show,
  addFavArtist,
}