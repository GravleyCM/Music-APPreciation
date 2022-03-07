import { Profile } from "../models/profile.js"

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

export {
  index
}