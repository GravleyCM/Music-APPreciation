import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as songsCtrl from "../controllers/songs.js"

const router = Router()

router.get("/", songsCtrl.index)
router.post("/", isLoggedIn, songsCtrl.createSong)

export {
  router
}