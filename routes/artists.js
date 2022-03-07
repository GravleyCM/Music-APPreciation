import { Router } from "express"
import * as artistsCtrl from "../controllers/artists.js"
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()

router.get("/", artistsCtrl.index)
router.post("/",  isLoggedIn, artistsCtrl.create)
router.get("/:id", artistsCtrl.show)
router.post("/:id/albums", artistsCtrl.addAlbum)


export {
  router
}