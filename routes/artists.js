import { Router } from "express"
import * as artistsCtrl from "../controllers/artists.js"


const router = Router()

router.get("/", artistaCtrl.index)


export {
  router
}