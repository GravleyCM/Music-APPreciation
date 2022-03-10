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
    res.render(err)
  })
}

// function show(req, res) {
//   Profile.findById(req.params.id)
//   .then((profile) => {
//     Profile.findById(req.user.profile._id)
//     .then(self => {
//       const isSelf = self._id.equals(profile._id)
//       res.render("profiles/show", {
//         title: `${profile.name}'s profile`,
//         profile,
//         artists,
//         self,
//         isSelf,
//       })
//     })
//   })
//   .catch((err) => console.log(err))
// }
function show(req, res) {
  Proofile.findById(req.params.id)
  .populate("artist")
  .exec(function(err, profile) {
    Artist.find({_id: {$nin: profile.artist}}, function(err, artists) {
      console.log(err)
      res.render('profiles/show', {
        title: `${profile.name}'s profile`, 
        profile,
        artists,
      })
    })
  })
}

function addFavArtist(req, res) {
  Profile.findById(req.user.profile._id)
  .then(profile =>  {
    profile.favArtist.push(req.body)
    profile.save()
    .then(() => res.redirect(`/profiles/${req.user.profile._id}`))
  })
}

export {
  index,
  show,
  addFavArtist,
}