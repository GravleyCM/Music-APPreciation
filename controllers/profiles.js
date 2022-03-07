import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find(modelQuery)
    .sort("name")
    .exec(function (err, profiles) {
      if (err) return next(err)
      res.render("profiles/index", { 
        profiles, 
        name: req.query.name,
        user: req.user
      })
    })
}

export {
  index
}