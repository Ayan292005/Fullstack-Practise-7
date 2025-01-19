import express from "express"
import { Controller } from "../controllers/contoller.js"

export const route= express.Router()
route.get("/",Controller.getAll)
route.get("/:id",Controller.getById)
route.delete("/:id",Controller.deleteElem)
route.post("/",Controller.postElem)