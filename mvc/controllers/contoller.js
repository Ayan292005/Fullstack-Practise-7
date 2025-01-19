import { musicModel } from "../models/model.js"

export const Controller = {
    getAll: async (req, res) => {
        let elems = await musicModel.find()
        res.send(elems)
    },
    getById: async (req, res) => {
        let id = req.params.id
        let myElem = await musicModel.findById(id)
        res.send({
            message: "find by id",
            data: myElem
        })
    },
    deleteElem: async (req, res) => {
        let { id } = req.params
        await musicModel.findByIdAndDelete(id)
        res.send({
            message: "deleted"
        })
    },
    postElem:async (req, res) => {
        let id=req.params.id
        let newElem=musicModel(req.body)
        await newElem.save()
        res.send({
            message:"posted",
            data:req.body
        })
    }
}