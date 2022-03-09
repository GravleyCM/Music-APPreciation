import { Router } from "express"
import { isLoggedIn } from "../middleware/middleware.js"
import * as songsCtrl from "../controllers/songs.js"

const router = Router()

router.post("/songs", isLoggedIn, songsCtrl.addSong)


export {
  router
}