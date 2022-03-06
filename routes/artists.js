import { Router } from "express"
import * as artistsCtrl from "../controllers/artists.js"


const router = Router()

router.get("/", artistsCtrl.index)
router.post("/artists", artistsCtrl.create)


export {
  router
}