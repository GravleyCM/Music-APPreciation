import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as profilesCtrl from "../controllers/profiles.js"

const router = Router()

router.get("/", isLoggedIn, profilesCtrl.index)
router.get("/:id", profilesCtrl.show)
router.post("/:id", profilesCtrl.addFavArtist)

export {
  router
}