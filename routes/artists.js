import { Router } from "express"

const router = Router()

router.get("/", artistCtrl.index)


export {
  router
}