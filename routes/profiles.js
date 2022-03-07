import { Router } from "express"
import * as profileCtrl from "../controllers/profiles.js"

const router = Router()

router.get("/", profileCtrl.index)

function isLoggedin(req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/auth/google')
}

export {
  router
}