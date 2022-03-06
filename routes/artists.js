import { Router } from "express"
import * as artistsCtrl from "../controllers/artists.js"
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()

router.get("/", artistsCtrl.index)
router.post("/artists",  isLoggedIn, artistsCtrl.create)


export {
  router
}